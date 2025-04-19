/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/get/route";
exports.ids = ["app/api/get/route"];
exports.modules = {

/***/ "(rsc)/./app/api/get/route.ts":
/*!******************************!*\
  !*** ./app/api/get/route.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _services_get_chat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/get-chat */ \"(rsc)/./services/get-chat.ts\");\n\nconst runtime = 'edge';\nasync function POST(request) {\n    const body = await request.json();\n    const response = await (0,_services_get_chat__WEBPACK_IMPORTED_MODULE_0__.getChat)(body, request.headers);\n    return response;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2dldC9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUErRDtBQUUvRCxNQUFNQyxVQUFVO0FBRVQsZUFBZUMsS0FBS0MsT0FBZ0I7SUFDekMsTUFBTUMsT0FBTyxNQUFNRCxRQUFRRSxJQUFJO0lBQy9CLE1BQU1DLFdBQVcsTUFBTU4sMkRBQU9BLENBQUNJLE1BQU1ELFFBQVFJLE9BQU87SUFDcEQsT0FBT0Q7QUFDVCIsInNvdXJjZXMiOlsiL1VzZXJzL2FjYm94bGl1L3Byb2plY3RzL2Jpam9uL2VjaG9haS9hcHAvYXBpL2dldC9yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRDaGF0LCBHZXRDaGF0UmVzcG9uc2UgfSBmcm9tIFwiQC9zZXJ2aWNlcy9nZXQtY2hhdFwiO1xuXG5jb25zdCBydW50aW1lID0gJ2VkZ2UnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgY29uc3QgYm9keSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldENoYXQoYm9keSwgcmVxdWVzdC5oZWFkZXJzKTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufSJdLCJuYW1lcyI6WyJnZXRDaGF0IiwicnVudGltZSIsIlBPU1QiLCJyZXF1ZXN0IiwiYm9keSIsImpzb24iLCJyZXNwb25zZSIsImhlYWRlcnMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/get/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fget%2Froute&page=%2Fapi%2Fget%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fget%2Froute.ts&appDir=%2FUsers%2Facboxliu%2Fprojects%2Fbijon%2Fechoai%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Facboxliu%2Fprojects%2Fbijon%2Fechoai&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fget%2Froute&page=%2Fapi%2Fget%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fget%2Froute.ts&appDir=%2FUsers%2Facboxliu%2Fprojects%2Fbijon%2Fechoai%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Facboxliu%2Fprojects%2Fbijon%2Fechoai&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/.pnpm/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/.pnpm/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_acboxliu_projects_bijon_echoai_app_api_get_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/get/route.ts */ \"(rsc)/./app/api/get/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/get/route\",\n        pathname: \"/api/get\",\n        filename: \"route\",\n        bundlePath: \"app/api/get/route\"\n    },\n    resolvedPagePath: \"/Users/acboxliu/projects/bijon/echoai/app/api/get/route.ts\",\n    nextConfigOutput,\n    userland: _Users_acboxliu_projects_bijon_echoai_app_api_get_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxNS4yLjJfcmVhY3QtZG9tQDE5LjAuMF9yZWFjdEAxOS4wLjBfX3JlYWN0QDE5LjAuMC9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZnZXQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmdldCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmdldCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmFjYm94bGl1JTJGcHJvamVjdHMlMkZiaWpvbiUyRmVjaG9haSUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZhY2JveGxpdSUyRnByb2plY3RzJTJGYmlqb24lMkZlY2hvYWkmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ1U7QUFDdkY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9hY2JveGxpdS9wcm9qZWN0cy9iaWpvbi9lY2hvYWkvYXBwL2FwaS9nZXQvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2dldC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2dldFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZ2V0L3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2FjYm94bGl1L3Byb2plY3RzL2Jpam9uL2VjaG9haS9hcHAvYXBpL2dldC9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fget%2Froute&page=%2Fapi%2Fget%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fget%2Froute.ts&appDir=%2FUsers%2Facboxliu%2Fprojects%2Fbijon%2Fechoai%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Facboxliu%2Fprojects%2Fbijon%2Fechoai&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \*********************************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./services/get-chat.ts":
/*!******************************!*\
  !*** ./services/get-chat.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getChat: () => (/* binding */ getChat)\n/* harmony export */ });\n/* harmony import */ var _lib_supabase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/supabase */ \"(rsc)/./services/lib/supabase.ts\");\n\nasync function getChat(body, headers) {\n    const token = headers.get(\"Authorization\")?.split(\" \")[1];\n    if (!token && process.env.UNAUTHORIZED_MODE !== \"true\") {\n        return new Response(\"Unauthorized\", {\n            status: 401\n        });\n    }\n    const userId = process.env.UNAUTHORIZED_MODE === \"true\" ? process.env.UNAUTHORIZED_MODE_USER_ID : (await _lib_supabase__WEBPACK_IMPORTED_MODULE_0__[\"default\"].auth.getUser(token)).data.user?.id;\n    const { data, error } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_0__[\"default\"].from('chats').select('uid, id, designer_context, speaker_context, layout_context, chalk_context, designer_results, speaker_results, layout_results, chalk_results, branches, displayed_messages').eq('uid', userId).eq('id', body.chat_id).single();\n    if (error) {\n        console.log(error);\n        return new Response(\"Internal Server Error\", {\n            status: 500\n        });\n    }\n    console.log(data);\n    const chat = {\n        chat_id: data.id,\n        designer_context: JSON.parse(data.designer_context),\n        designer_results: JSON.parse(data.designer_results),\n        speaker_context: JSON.parse(data.speaker_context),\n        speaker_results: JSON.parse(data.speaker_results),\n        layout_context: JSON.parse(data.layout_context),\n        layout_results: JSON.parse(data.layout_results),\n        chalk_context: JSON.parse(data.chalk_context),\n        chalk_results: JSON.parse(data.chalk_results),\n        branches: JSON.parse(data.branches),\n        displayed_messages: JSON.parse(data.displayed_messages)\n    };\n    console.log(JSON.stringify(chat, null, 2));\n    return new Response(JSON.stringify(chat), {\n        status: 200\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zZXJ2aWNlcy9nZXQtY2hhdC50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUVzQztBQXdEL0IsZUFBZUMsUUFBUUMsSUFBd0IsRUFBRUMsT0FBZ0I7SUFDdEUsTUFBTUMsUUFBUUQsUUFBUUUsR0FBRyxDQUFDLGtCQUFrQkMsTUFBTSxJQUFJLENBQUMsRUFBRTtJQUN6RCxJQUFJLENBQUNGLFNBQVNHLFFBQVFDLEdBQUcsQ0FBQ0MsaUJBQWlCLEtBQUssUUFBUTtRQUN0RCxPQUFPLElBQUlDLFNBQVMsZ0JBQWdCO1lBQUVDLFFBQVE7UUFBSTtJQUNwRDtJQUNBLE1BQU1DLFNBQ0pMLFFBQVFDLEdBQUcsQ0FBQ0MsaUJBQWlCLEtBQUssU0FDOUJGLFFBQVFDLEdBQUcsQ0FBQ0sseUJBQXlCLEdBQ3JDLENBQUMsTUFBTWIscURBQVFBLENBQUNjLElBQUksQ0FBQ0MsT0FBTyxDQUFDWCxNQUFLLEVBQUdZLElBQUksQ0FBQ0MsSUFBSSxFQUFFQztJQUV0RCxNQUFNLEVBQUVGLElBQUksRUFBRUcsS0FBSyxFQUFFLEdBQUcsTUFBTW5CLHFEQUFRQSxDQUNuQ29CLElBQUksQ0FBQyxTQUNMQyxNQUFNLENBQUMsNktBQ1BDLEVBQUUsQ0FBQyxPQUFPVixRQUNWVSxFQUFFLENBQUMsTUFBTXBCLEtBQUtxQixPQUFPLEVBQ3JCQyxNQUFNO0lBRVQsSUFBSUwsT0FBTztRQUNUTSxRQUFRQyxHQUFHLENBQUNQO1FBQ1osT0FBTyxJQUFJVCxTQUFTLHlCQUF5QjtZQUFFQyxRQUFRO1FBQUk7SUFDN0Q7SUFHQWMsUUFBUUMsR0FBRyxDQUFDVjtJQUVaLE1BQU1XLE9BQXdCO1FBQzVCSixTQUFTUCxLQUFLRSxFQUFFO1FBQ2hCVSxrQkFBa0JDLEtBQUtDLEtBQUssQ0FBQ2QsS0FBS1ksZ0JBQWdCO1FBQ2xERyxrQkFBa0JGLEtBQUtDLEtBQUssQ0FBQ2QsS0FBS2UsZ0JBQWdCO1FBQ2xEQyxpQkFBaUJILEtBQUtDLEtBQUssQ0FBQ2QsS0FBS2dCLGVBQWU7UUFDaERDLGlCQUFpQkosS0FBS0MsS0FBSyxDQUFDZCxLQUFLaUIsZUFBZTtRQUNoREMsZ0JBQWdCTCxLQUFLQyxLQUFLLENBQUNkLEtBQUtrQixjQUFjO1FBQzlDQyxnQkFBZ0JOLEtBQUtDLEtBQUssQ0FBQ2QsS0FBS21CLGNBQWM7UUFDOUNDLGVBQWVQLEtBQUtDLEtBQUssQ0FBQ2QsS0FBS29CLGFBQWE7UUFDNUNDLGVBQWVSLEtBQUtDLEtBQUssQ0FBQ2QsS0FBS3FCLGFBQWE7UUFDNUNDLFVBQVVULEtBQUtDLEtBQUssQ0FBQ2QsS0FBS3NCLFFBQVE7UUFDbENDLG9CQUFvQlYsS0FBS0MsS0FBSyxDQUFDZCxLQUFLdUIsa0JBQWtCO0lBQ3hEO0lBRUFkLFFBQVFDLEdBQUcsQ0FBQ0csS0FBS1csU0FBUyxDQUFDYixNQUFNLE1BQU07SUFFdkMsT0FBTyxJQUFJakIsU0FBU21CLEtBQUtXLFNBQVMsQ0FBQ2IsT0FBTztRQUFFaEIsUUFBUTtJQUFJO0FBQzFEIiwic291cmNlcyI6WyIvVXNlcnMvYWNib3hsaXUvcHJvamVjdHMvYmlqb24vZWNob2FpL3NlcnZpY2VzL2dldC1jaGF0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlc2lnbmVyU3RlcCwgU3RlcEJyYW5jaCB9IGZyb20gXCJAL3dvcmtmbG93L2Rlc2lnbmVyXCI7XG5pbXBvcnQgeyBDaGF0Q29tcGxldGlvbk1lc3NhZ2VQYXJhbSB9IGZyb20gXCJvcGVuYWkvcmVzb3VyY2VzLm1qc1wiO1xuaW1wb3J0IHN1cGFiYXNlIGZyb20gXCIuL2xpYi9zdXBhYmFzZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEdldENoYXRSZXF1ZXN0Qm9keSB7XG4gIGNoYXRfaWQ6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBNZXNzYWdlID0gQ2hhdENvbXBsZXRpb25NZXNzYWdlUGFyYW1cbmV4cG9ydCB0eXBlIENvbnRleHQgPSBNZXNzYWdlW11cbmV4cG9ydCBpbnRlcmZhY2UgRGlzcGxheWVkTWVzc2FnZSB7XG4gIHJvbGU6ICd1c2VyJyB8ICdzcGVha2VyJyB8ICdwcm9jZXNzb3InXG4gIGNvbnRlbnQ6IHN0cmluZ1xufVxuZXhwb3J0IGludGVyZmFjZSBEZXNpZ25lclJlc3VsdCB7XG4gIHByb21wdDogc3RyaW5nXG4gIHJlZnM/OiBzdHJpbmdcbiAgc3RlcD86IHN0cmluZ1xuICBtb2RlbD86IHN0cmluZ1xuICByZXN1bHQ6IERlc2lnbmVyU3RlcFtdXG59XG5leHBvcnQgaW50ZXJmYWNlIFNwZWFrZXJSZXN1bHQge1xuICBzdGVwOiBzdHJpbmdcbiAgcHJvYmxlbTogc3RyaW5nXG4gIGtub3dsZWRnZTogc3RyaW5nXG4gIGV4cGxhbmF0aW9uOiBzdHJpbmdcbiAgY29uY2x1c2lvbjogc3RyaW5nXG4gIHByb21wdD86IHN0cmluZ1xuICBtb2RlbD86IHN0cmluZ1xuICByZXN1bHQ6IHN0cmluZ1xufVxuZXhwb3J0IGludGVyZmFjZSBMYXlvdXRSZXN1bHQge1xuICBzdGVwOiBzdHJpbmdcbiAgcHJvYmxlbTogc3RyaW5nXG4gIGtub3dsZWRnZTogc3RyaW5nXG4gIGV4cGxhbmF0aW9uOiBzdHJpbmdcbiAgY29uY2x1c2lvbjogc3RyaW5nXG4gIG1vZGVsPzogc3RyaW5nXG4gIHJlc3VsdDogc3RyaW5nXG59XG5leHBvcnQgaW50ZXJmYWNlIENoYWxrUmVzdWx0IHtcbiAgLy8gVE9ETzogY2hhbGtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZXRDaGF0UmVzcG9uc2Uge1xuICBjaGF0X2lkOiBzdHJpbmdcbiAgZGVzaWduZXJfY29udGV4dDogQ29udGV4dFxuICBkZXNpZ25lcl9yZXN1bHRzOiBEZXNpZ25lclJlc3VsdFtdXG4gIHNwZWFrZXJfY29udGV4dDogQ29udGV4dFxuICBzcGVha2VyX3Jlc3VsdHM6IFNwZWFrZXJSZXN1bHRbXVxuICBsYXlvdXRfY29udGV4dDogQ29udGV4dFxuICBsYXlvdXRfcmVzdWx0czogTGF5b3V0UmVzdWx0W11cbiAgY2hhbGtfY29udGV4dDogQ29udGV4dFxuICBjaGFsa19yZXN1bHRzOiBDaGFsa1Jlc3VsdFtdXG4gIGJyYW5jaGVzOiBTdGVwQnJhbmNoW11cbiAgZGlzcGxheWVkX21lc3NhZ2VzOiBEaXNwbGF5ZWRNZXNzYWdlW11cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENoYXQoYm9keTogR2V0Q2hhdFJlcXVlc3RCb2R5LCBoZWFkZXJzOiBIZWFkZXJzKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICBjb25zdCB0b2tlbiA9IGhlYWRlcnMuZ2V0KFwiQXV0aG9yaXphdGlvblwiKT8uc3BsaXQoXCIgXCIpWzFdO1xuICBpZiAoIXRva2VuICYmIHByb2Nlc3MuZW52LlVOQVVUSE9SSVpFRF9NT0RFICE9PSBcInRydWVcIikge1xuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXCJVbmF1dGhvcml6ZWRcIiwgeyBzdGF0dXM6IDQwMSB9KTtcbiAgfVxuICBjb25zdCB1c2VySWQgPVxuICAgIHByb2Nlc3MuZW52LlVOQVVUSE9SSVpFRF9NT0RFID09PSBcInRydWVcIlxuICAgICAgPyBwcm9jZXNzLmVudi5VTkFVVEhPUklaRURfTU9ERV9VU0VSX0lEXG4gICAgICA6IChhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIodG9rZW4pKS5kYXRhLnVzZXI/LmlkO1xuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb20oJ2NoYXRzJylcbiAgICAuc2VsZWN0KCd1aWQsIGlkLCBkZXNpZ25lcl9jb250ZXh0LCBzcGVha2VyX2NvbnRleHQsIGxheW91dF9jb250ZXh0LCBjaGFsa19jb250ZXh0LCBkZXNpZ25lcl9yZXN1bHRzLCBzcGVha2VyX3Jlc3VsdHMsIGxheW91dF9yZXN1bHRzLCBjaGFsa19yZXN1bHRzLCBicmFuY2hlcywgZGlzcGxheWVkX21lc3NhZ2VzJylcbiAgICAuZXEoJ3VpZCcsIHVzZXJJZClcbiAgICAuZXEoJ2lkJywgYm9keS5jaGF0X2lkKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiSW50ZXJuYWwgU2VydmVyIEVycm9yXCIsIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cblxuXG4gIGNvbnNvbGUubG9nKGRhdGEpXG5cbiAgY29uc3QgY2hhdDogR2V0Q2hhdFJlc3BvbnNlID0ge1xuICAgIGNoYXRfaWQ6IGRhdGEuaWQsXG4gICAgZGVzaWduZXJfY29udGV4dDogSlNPTi5wYXJzZShkYXRhLmRlc2lnbmVyX2NvbnRleHQpLFxuICAgIGRlc2lnbmVyX3Jlc3VsdHM6IEpTT04ucGFyc2UoZGF0YS5kZXNpZ25lcl9yZXN1bHRzKSxcbiAgICBzcGVha2VyX2NvbnRleHQ6IEpTT04ucGFyc2UoZGF0YS5zcGVha2VyX2NvbnRleHQpLFxuICAgIHNwZWFrZXJfcmVzdWx0czogSlNPTi5wYXJzZShkYXRhLnNwZWFrZXJfcmVzdWx0cyksXG4gICAgbGF5b3V0X2NvbnRleHQ6IEpTT04ucGFyc2UoZGF0YS5sYXlvdXRfY29udGV4dCksXG4gICAgbGF5b3V0X3Jlc3VsdHM6IEpTT04ucGFyc2UoZGF0YS5sYXlvdXRfcmVzdWx0cyksXG4gICAgY2hhbGtfY29udGV4dDogSlNPTi5wYXJzZShkYXRhLmNoYWxrX2NvbnRleHQpLFxuICAgIGNoYWxrX3Jlc3VsdHM6IEpTT04ucGFyc2UoZGF0YS5jaGFsa19yZXN1bHRzKSxcbiAgICBicmFuY2hlczogSlNPTi5wYXJzZShkYXRhLmJyYW5jaGVzKSxcbiAgICBkaXNwbGF5ZWRfbWVzc2FnZXM6IEpTT04ucGFyc2UoZGF0YS5kaXNwbGF5ZWRfbWVzc2FnZXMpLFxuICB9XG5cbiAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoY2hhdCwgbnVsbCwgMikpXG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeShjaGF0KSwgeyBzdGF0dXM6IDIwMCB9KTtcbn0iXSwibmFtZXMiOlsic3VwYWJhc2UiLCJnZXRDaGF0IiwiYm9keSIsImhlYWRlcnMiLCJ0b2tlbiIsImdldCIsInNwbGl0IiwicHJvY2VzcyIsImVudiIsIlVOQVVUSE9SSVpFRF9NT0RFIiwiUmVzcG9uc2UiLCJzdGF0dXMiLCJ1c2VySWQiLCJVTkFVVEhPUklaRURfTU9ERV9VU0VSX0lEIiwiYXV0aCIsImdldFVzZXIiLCJkYXRhIiwidXNlciIsImlkIiwiZXJyb3IiLCJmcm9tIiwic2VsZWN0IiwiZXEiLCJjaGF0X2lkIiwic2luZ2xlIiwiY29uc29sZSIsImxvZyIsImNoYXQiLCJkZXNpZ25lcl9jb250ZXh0IiwiSlNPTiIsInBhcnNlIiwiZGVzaWduZXJfcmVzdWx0cyIsInNwZWFrZXJfY29udGV4dCIsInNwZWFrZXJfcmVzdWx0cyIsImxheW91dF9jb250ZXh0IiwibGF5b3V0X3Jlc3VsdHMiLCJjaGFsa19jb250ZXh0IiwiY2hhbGtfcmVzdWx0cyIsImJyYW5jaGVzIiwiZGlzcGxheWVkX21lc3NhZ2VzIiwic3RyaW5naWZ5Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./services/get-chat.ts\n");

/***/ }),

/***/ "(rsc)/./services/lib/supabase.ts":
/*!**********************************!*\
  !*** ./services/lib/supabase.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"(rsc)/./node_modules/.pnpm/@supabase+supabase-js@2.49.3/node_modules/@supabase/supabase-js/dist/module/index.js\");\n\nconst supabaseUrl = \"https://gppcjiwuyqyndxmzkfiw.supabase.co\";\nconst supabaseKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwcGNqaXd1eXF5bmR4bXprZml3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA3MzIyNTYsImV4cCI6MjA1NjMwODI1Nn0.6JPtIhpwKuXH-Iu4mvJWeo_ZST72lALVsdJgXEKv3b8\";\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseKey);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (supabase);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zZXJ2aWNlcy9saWIvc3VwYWJhc2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBb0Q7QUFFcEQsTUFBTUMsY0FBY0MsMENBQW9DO0FBQ3hELE1BQU1HLGNBQWNILGtOQUF5QztBQUU3RCxNQUFNSyxXQUFXUCxtRUFBWUEsQ0FBQ0MsYUFBY0k7QUFFNUMsaUVBQWVFLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hY2JveGxpdS9wcm9qZWN0cy9iaWpvbi9lY2hvYWkvc2VydmljZXMvbGliL3N1cGFiYXNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcydcblxuY29uc3Qgc3VwYWJhc2VVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkxcbmNvbnN0IHN1cGFiYXNlS2V5ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfQU5PTl9LRVlcblxuY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQoc3VwYWJhc2VVcmwhLCBzdXBhYmFzZUtleSEpXG5cbmV4cG9ydCBkZWZhdWx0IHN1cGFiYXNlXG4iXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50Iiwic3VwYWJhc2VVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMIiwic3VwYWJhc2VLZXkiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSIsInN1cGFiYXNlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./services/lib/supabase.ts\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \*********************************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0","vendor-chunks/tr46@0.0.3","vendor-chunks/@supabase+auth-js@2.69.1","vendor-chunks/@supabase+realtime-js@2.11.2","vendor-chunks/@supabase+postgrest-js@1.19.2","vendor-chunks/@supabase+node-fetch@2.6.15","vendor-chunks/whatwg-url@5.0.0","vendor-chunks/@supabase+storage-js@2.7.1","vendor-chunks/@supabase+supabase-js@2.49.3","vendor-chunks/@supabase+functions-js@2.4.4","vendor-chunks/webidl-conversions@3.0.1"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fget%2Froute&page=%2Fapi%2Fget%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fget%2Froute.ts&appDir=%2FUsers%2Facboxliu%2Fprojects%2Fbijon%2Fechoai%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Facboxliu%2Fprojects%2Fbijon%2Fechoai&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();