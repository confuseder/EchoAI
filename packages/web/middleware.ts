import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { logtoConfig } from '@echoai/api'
import { getLogtoContext } from '@logto/next/server-actions'

export async function middleware(request: NextRequest) {
  // 检查是否是认证相关的路由
  const isAuthRoute = request.nextUrl.pathname.startsWith('/auth/')

  try {
    // 检查用户登录状态
    const { isAuthenticated } = await getLogtoContext(logtoConfig)

    // 如果用户未登录且访问的不是认证相关路由，重定向到登录页
    if (!isAuthenticated && !isAuthRoute) {
      const loginUrl = new URL('/auth/login', request.url)
      // 保存原始URL作为登录后的重定向地址
      loginUrl.searchParams.set('redirect', request.nextUrl.pathname)
      return NextResponse.redirect(loginUrl)
    }

    // 如果用户已登录且访问登录页，重定向到首页
    if (isAuthenticated && request.nextUrl.pathname === '/auth/login') {
      return NextResponse.redirect(new URL('/', request.url))
    }

    // 其他情况正常访问
    return NextResponse.next()
  } catch (error) {
    // 发生错误时重定向到登录页
    console.error('Auth middleware error:', error)
    if (!isAuthRoute) {
      return NextResponse.redirect(new URL('/auth/login', request.url))
    }
    return NextResponse.next()
  }
}

// 配置需要进行中间件处理的路由
export const config = {
  // 排除不需要验证的静态资源路径
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
}