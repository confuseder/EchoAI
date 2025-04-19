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
exports.id = "app/api/layout/route";
exports.ids = ["app/api/layout/route"];
exports.modules = {

/***/ "(rsc)/./app/api/layout/route.ts":
/*!*********************************!*\
  !*** ./app/api/layout/route.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _services_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/layout */ \"(rsc)/./services/layout.ts\");\n\nconst runtime = 'edge';\nasync function POST(request) {\n    return (0,_services_layout__WEBPACK_IMPORTED_MODULE_0__.layout)(await request.json(), request.headers);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2xheW91dC9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUEyQztBQUUzQyxNQUFNQyxVQUFVO0FBRVQsZUFBZUMsS0FBS0MsT0FBZ0I7SUFDekMsT0FBT0gsd0RBQU1BLENBQUMsTUFBTUcsUUFBUUMsSUFBSSxJQUFJRCxRQUFRRSxPQUFPO0FBQ3JEIiwic291cmNlcyI6WyIvVXNlcnMvYWNib3hsaXUvcHJvamVjdHMvYmlqb24vZWNob2FpL2FwcC9hcGkvbGF5b3V0L3JvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxheW91dCB9IGZyb20gXCJAL3NlcnZpY2VzL2xheW91dFwiO1xuXG5jb25zdCBydW50aW1lID0gJ2VkZ2UnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgcmV0dXJuIGxheW91dChhd2FpdCByZXF1ZXN0Lmpzb24oKSwgcmVxdWVzdC5oZWFkZXJzKTtcbn0iXSwibmFtZXMiOlsibGF5b3V0IiwicnVudGltZSIsIlBPU1QiLCJyZXF1ZXN0IiwianNvbiIsImhlYWRlcnMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/layout/route.ts\n");

/***/ }),

/***/ "(rsc)/./config/client.ts":
/*!**************************!*\
  !*** ./config/client.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DEFAULT_CHALK_MODEL: () => (/* binding */ DEFAULT_CHALK_MODEL),\n/* harmony export */   DEFAULT_DESIGNER_MODEL: () => (/* binding */ DEFAULT_DESIGNER_MODEL),\n/* harmony export */   DEFAULT_LAYOUT_MODEL: () => (/* binding */ DEFAULT_LAYOUT_MODEL),\n/* harmony export */   DEFAULT_PROVIDER: () => (/* binding */ DEFAULT_PROVIDER),\n/* harmony export */   DEFAULT_SPEAKER_MODEL: () => (/* binding */ DEFAULT_SPEAKER_MODEL)\n/* harmony export */ });\n/* harmony import */ var _utils_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/providers */ \"(rsc)/./utils/providers/index.ts\");\n\nconst DEFAULT_PROVIDER = (0,_utils_providers__WEBPACK_IMPORTED_MODULE_0__.openai)();\nconst DEFAULT_DESIGNER_MODEL = 'deepseek-v3';\nconst DEFAULT_CHALK_MODEL = '';\nconst DEFAULT_SPEAKER_MODEL = 'deepseek-v3';\nconst DEFAULT_LAYOUT_MODEL = 'deepseek-v3';\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9jb25maWcvY2xpZW50LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyQztBQUVwQyxNQUFNQyxtQkFBbUJELHdEQUFNQSxHQUFFO0FBQ2pDLE1BQU1FLHlCQUF5QixjQUFhO0FBQzVDLE1BQU1DLHNCQUFzQixHQUFFO0FBQzlCLE1BQU1DLHdCQUF3QixjQUFhO0FBQzNDLE1BQU1DLHVCQUF1QixjQUFhIiwic291cmNlcyI6WyIvVXNlcnMvYWNib3hsaXUvcHJvamVjdHMvYmlqb24vZWNob2FpL2NvbmZpZy9jbGllbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb3BlbmFpIH0gZnJvbSBcIkAvdXRpbHMvcHJvdmlkZXJzXCI7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1BST1ZJREVSID0gb3BlbmFpKClcbmV4cG9ydCBjb25zdCBERUZBVUxUX0RFU0lHTkVSX01PREVMID0gJ2RlZXBzZWVrLXYzJ1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfQ0hBTEtfTU9ERUwgPSAnJ1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfU1BFQUtFUl9NT0RFTCA9ICdkZWVwc2Vlay12MydcbmV4cG9ydCBjb25zdCBERUZBVUxUX0xBWU9VVF9NT0RFTCA9ICdkZWVwc2Vlay12MydcbiJdLCJuYW1lcyI6WyJvcGVuYWkiLCJERUZBVUxUX1BST1ZJREVSIiwiREVGQVVMVF9ERVNJR05FUl9NT0RFTCIsIkRFRkFVTFRfQ0hBTEtfTU9ERUwiLCJERUZBVUxUX1NQRUFLRVJfTU9ERUwiLCJERUZBVUxUX0xBWU9VVF9NT0RFTCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./config/client.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flayout%2Froute&page=%2Fapi%2Flayout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flayout%2Froute.ts&appDir=%2FUsers%2Facboxliu%2Fprojects%2Fbijon%2Fechoai%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Facboxliu%2Fprojects%2Fbijon%2Fechoai&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flayout%2Froute&page=%2Fapi%2Flayout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flayout%2Froute.ts&appDir=%2FUsers%2Facboxliu%2Fprojects%2Fbijon%2Fechoai%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Facboxliu%2Fprojects%2Fbijon%2Fechoai&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/.pnpm/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/.pnpm/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_acboxliu_projects_bijon_echoai_app_api_layout_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/layout/route.ts */ \"(rsc)/./app/api/layout/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/layout/route\",\n        pathname: \"/api/layout\",\n        filename: \"route\",\n        bundlePath: \"app/api/layout/route\"\n    },\n    resolvedPagePath: \"/Users/acboxliu/projects/bijon/echoai/app/api/layout/route.ts\",\n    nextConfigOutput,\n    userland: _Users_acboxliu_projects_bijon_echoai_app_api_layout_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxNS4yLjJfcmVhY3QtZG9tQDE5LjAuMF9yZWFjdEAxOS4wLjBfX3JlYWN0QDE5LjAuMC9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZsYXlvdXQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmxheW91dCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmxheW91dCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmFjYm94bGl1JTJGcHJvamVjdHMlMkZiaWpvbiUyRmVjaG9haSUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZhY2JveGxpdSUyRnByb2plY3RzJTJGYmlqb24lMkZlY2hvYWkmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2E7QUFDMUY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9hY2JveGxpdS9wcm9qZWN0cy9iaWpvbi9lY2hvYWkvYXBwL2FwaS9sYXlvdXQvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2xheW91dC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2xheW91dFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvbGF5b3V0L3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2FjYm94bGl1L3Byb2plY3RzL2Jpam9uL2VjaG9haS9hcHAvYXBpL2xheW91dC9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flayout%2Froute&page=%2Fapi%2Flayout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flayout%2Froute.ts&appDir=%2FUsers%2Facboxliu%2Fprojects%2Fbijon%2Fechoai%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Facboxliu%2Fprojects%2Fbijon%2Fechoai&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \*********************************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./services/layout.ts":
/*!****************************!*\
  !*** ./services/layout.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   layout: () => (/* binding */ layout)\n/* harmony export */ });\n/* harmony import */ var _lib_supabase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/supabase */ \"(rsc)/./services/lib/supabase.ts\");\n/* harmony import */ var _workflow_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/workflow/layout */ \"(rsc)/./workflow/layout/index.ts\");\n\n\nasync function layout(body, headers) {\n    const token = headers.get(\"Authorization\")?.split(\" \")[1];\n    if (!token && process.env.UNAUTHORIZED_MODE !== \"true\") {\n        return new Response(\"Unauthorized\", {\n            status: 401\n        });\n    }\n    const userId = process.env.UNAUTHORIZED_MODE === \"true\" ? process.env.UNAUTHORIZED_MODE_USER_ID : (await _lib_supabase__WEBPACK_IMPORTED_MODULE_0__[\"default\"].auth.getUser(token)).data.user?.id;\n    const layoutContext = await _lib_supabase__WEBPACK_IMPORTED_MODULE_0__[\"default\"].from('chats').select('uid, id, layout_context, layout_results, displayed_messages, branches').eq('uid', userId).eq('id', body.chat_id).single();\n    if (!layoutContext.data) {\n        return new Response(\"Chat not found\", {\n            status: 404\n        });\n    }\n    const context = JSON.parse(layoutContext.data.layout_context);\n    const layoutResult = await (0,_workflow_layout__WEBPACK_IMPORTED_MODULE_1__.startLayoutWorkflow)(context, {\n        ...body\n    });\n    await _lib_supabase__WEBPACK_IMPORTED_MODULE_0__[\"default\"].from('chats').update({\n        layout_context: JSON.stringify(context)\n    }).eq('uid', userId).eq('id', body.chat_id);\n    return new Response(JSON.stringify(layoutResult), {\n        status: 200\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zZXJ2aWNlcy9sYXlvdXQudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ3FDO0FBQ2tCO0FBa0JoRCxlQUFlRSxPQUFPQyxJQUF1QixFQUFFQyxPQUFnQjtJQUNwRSxNQUFNQyxRQUFRRCxRQUFRRSxHQUFHLENBQUMsa0JBQWtCQyxNQUFNLElBQUksQ0FBQyxFQUFFO0lBQ3pELElBQUksQ0FBQ0YsU0FBU0csUUFBUUMsR0FBRyxDQUFDQyxpQkFBaUIsS0FBSyxRQUFRO1FBQ3RELE9BQU8sSUFBSUMsU0FBUyxnQkFBZ0I7WUFBRUMsUUFBUTtRQUFJO0lBQ3BEO0lBQ0EsTUFBTUMsU0FDSkwsUUFBUUMsR0FBRyxDQUFDQyxpQkFBaUIsS0FBSyxTQUM5QkYsUUFBUUMsR0FBRyxDQUFDSyx5QkFBeUIsR0FDckMsQ0FBQyxNQUFNZCxxREFBUUEsQ0FBQ2UsSUFBSSxDQUFDQyxPQUFPLENBQUNYLE1BQUssRUFBR1ksSUFBSSxDQUFDQyxJQUFJLEVBQUVDO0lBRXRELE1BQU1DLGdCQUFnQixNQUFNcEIscURBQVFBLENBQ2pDcUIsSUFBSSxDQUFDLFNBQ0xDLE1BQU0sQ0FBQyx5RUFDUEMsRUFBRSxDQUFDLE9BQU9WLFFBQ1ZVLEVBQUUsQ0FBQyxNQUFNcEIsS0FBS3FCLE9BQU8sRUFDckJDLE1BQU07SUFFVCxJQUFJLENBQUNMLGNBQWNILElBQUksRUFBRTtRQUN2QixPQUFPLElBQUlOLFNBQVMsa0JBQWtCO1lBQUVDLFFBQVE7UUFBSTtJQUN0RDtJQUVBLE1BQU1jLFVBQVVDLEtBQUtDLEtBQUssQ0FBQ1IsY0FBY0gsSUFBSSxDQUFDWSxjQUFjO0lBRTVELE1BQU1DLGVBQWUsTUFBTTdCLHFFQUFtQkEsQ0FBQ3lCLFNBQVM7UUFDdEQsR0FBR3ZCLElBQUk7SUFDVDtJQUVBLE1BQU1ILHFEQUFRQSxDQUNYcUIsSUFBSSxDQUFDLFNBQ0xVLE1BQU0sQ0FBQztRQUNORixnQkFBZ0JGLEtBQUtLLFNBQVMsQ0FBQ047SUFDakMsR0FDQ0gsRUFBRSxDQUFDLE9BQU9WLFFBQ1ZVLEVBQUUsQ0FBQyxNQUFNcEIsS0FBS3FCLE9BQU87SUFFeEIsT0FBTyxJQUFJYixTQUFTZ0IsS0FBS0ssU0FBUyxDQUFDRixlQUFlO1FBQUVsQixRQUFRO0lBQUk7QUFDbEUiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hY2JveGxpdS9wcm9qZWN0cy9iaWpvbi9lY2hvYWkvc2VydmljZXMvbGF5b3V0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYXRDb21wbGV0aW9uTWVzc2FnZVBhcmFtIH0gZnJvbSBcIm9wZW5haS9yZXNvdXJjZXMubWpzXCJcbmltcG9ydCBzdXBhYmFzZSBmcm9tIFwiLi9saWIvc3VwYWJhc2VcIlxuaW1wb3J0IHsgc3RhcnRMYXlvdXRXb3JrZmxvdyB9IGZyb20gXCJAL3dvcmtmbG93L2xheW91dFwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF5b3V0UmVxdWVzdEJvZHkge1xuICBjaGF0X2lkOiBzdHJpbmdcbiAgcHJvbXB0OiBzdHJpbmdcbiAgc3RlcDogc3RyaW5nXG4gIHByb2JsZW06IHN0cmluZ1xuICBrbm93bGVkZ2U6IHN0cmluZ1xuICBleHBsYW5hdGlvbjogc3RyaW5nXG4gIGNvbmNsdXNpb246IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExheW91dFJlc3BvbnNlIHtcbiAgY2hhdF9pZDogc3RyaW5nXG4gIHByb21wdDogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGF5b3V0KGJvZHk6IExheW91dFJlcXVlc3RCb2R5LCBoZWFkZXJzOiBIZWFkZXJzKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICBjb25zdCB0b2tlbiA9IGhlYWRlcnMuZ2V0KFwiQXV0aG9yaXphdGlvblwiKT8uc3BsaXQoXCIgXCIpWzFdO1xuICBpZiAoIXRva2VuICYmIHByb2Nlc3MuZW52LlVOQVVUSE9SSVpFRF9NT0RFICE9PSBcInRydWVcIikge1xuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXCJVbmF1dGhvcml6ZWRcIiwgeyBzdGF0dXM6IDQwMSB9KTtcbiAgfVxuICBjb25zdCB1c2VySWQgPVxuICAgIHByb2Nlc3MuZW52LlVOQVVUSE9SSVpFRF9NT0RFID09PSBcInRydWVcIlxuICAgICAgPyBwcm9jZXNzLmVudi5VTkFVVEhPUklaRURfTU9ERV9VU0VSX0lEXG4gICAgICA6IChhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIodG9rZW4pKS5kYXRhLnVzZXI/LmlkO1xuXG4gIGNvbnN0IGxheW91dENvbnRleHQgPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKCdjaGF0cycpXG4gICAgLnNlbGVjdCgndWlkLCBpZCwgbGF5b3V0X2NvbnRleHQsIGxheW91dF9yZXN1bHRzLCBkaXNwbGF5ZWRfbWVzc2FnZXMsIGJyYW5jaGVzJylcbiAgICAuZXEoJ3VpZCcsIHVzZXJJZClcbiAgICAuZXEoJ2lkJywgYm9keS5jaGF0X2lkKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAoIWxheW91dENvbnRleHQuZGF0YSkge1xuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXCJDaGF0IG5vdCBmb3VuZFwiLCB7IHN0YXR1czogNDA0IH0pO1xuICB9XG5cbiAgY29uc3QgY29udGV4dCA9IEpTT04ucGFyc2UobGF5b3V0Q29udGV4dC5kYXRhLmxheW91dF9jb250ZXh0KSBhcyBDaGF0Q29tcGxldGlvbk1lc3NhZ2VQYXJhbVtdO1xuICBcbiAgY29uc3QgbGF5b3V0UmVzdWx0ID0gYXdhaXQgc3RhcnRMYXlvdXRXb3JrZmxvdyhjb250ZXh0LCB7XG4gICAgLi4uYm9keSxcbiAgfSk7XG5cbiAgYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgnY2hhdHMnKVxuICAgIC51cGRhdGUoe1xuICAgICAgbGF5b3V0X2NvbnRleHQ6IEpTT04uc3RyaW5naWZ5KGNvbnRleHQpLFxuICAgIH0pXG4gICAgLmVxKCd1aWQnLCB1c2VySWQpXG4gICAgLmVxKCdpZCcsIGJvZHkuY2hhdF9pZCk7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeShsYXlvdXRSZXN1bHQpLCB7IHN0YXR1czogMjAwIH0pO1xufVxuIl0sIm5hbWVzIjpbInN1cGFiYXNlIiwic3RhcnRMYXlvdXRXb3JrZmxvdyIsImxheW91dCIsImJvZHkiLCJoZWFkZXJzIiwidG9rZW4iLCJnZXQiLCJzcGxpdCIsInByb2Nlc3MiLCJlbnYiLCJVTkFVVEhPUklaRURfTU9ERSIsIlJlc3BvbnNlIiwic3RhdHVzIiwidXNlcklkIiwiVU5BVVRIT1JJWkVEX01PREVfVVNFUl9JRCIsImF1dGgiLCJnZXRVc2VyIiwiZGF0YSIsInVzZXIiLCJpZCIsImxheW91dENvbnRleHQiLCJmcm9tIiwic2VsZWN0IiwiZXEiLCJjaGF0X2lkIiwic2luZ2xlIiwiY29udGV4dCIsIkpTT04iLCJwYXJzZSIsImxheW91dF9jb250ZXh0IiwibGF5b3V0UmVzdWx0IiwidXBkYXRlIiwic3RyaW5naWZ5Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./services/layout.ts\n");

/***/ }),

/***/ "(rsc)/./services/lib/supabase.ts":
/*!**********************************!*\
  !*** ./services/lib/supabase.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"(rsc)/./node_modules/.pnpm/@supabase+supabase-js@2.49.3/node_modules/@supabase/supabase-js/dist/module/index.js\");\n\nconst supabaseUrl = \"https://gppcjiwuyqyndxmzkfiw.supabase.co\";\nconst supabaseKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwcGNqaXd1eXF5bmR4bXprZml3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA3MzIyNTYsImV4cCI6MjA1NjMwODI1Nn0.6JPtIhpwKuXH-Iu4mvJWeo_ZST72lALVsdJgXEKv3b8\";\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseKey);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (supabase);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zZXJ2aWNlcy9saWIvc3VwYWJhc2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBb0Q7QUFFcEQsTUFBTUMsY0FBY0MsMENBQW9DO0FBQ3hELE1BQU1HLGNBQWNILGtOQUF5QztBQUU3RCxNQUFNSyxXQUFXUCxtRUFBWUEsQ0FBQ0MsYUFBY0k7QUFFNUMsaUVBQWVFLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hY2JveGxpdS9wcm9qZWN0cy9iaWpvbi9lY2hvYWkvc2VydmljZXMvbGliL3N1cGFiYXNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcydcblxuY29uc3Qgc3VwYWJhc2VVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkxcbmNvbnN0IHN1cGFiYXNlS2V5ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfQU5PTl9LRVlcblxuY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQoc3VwYWJhc2VVcmwhLCBzdXBhYmFzZUtleSEpXG5cbmV4cG9ydCBkZWZhdWx0IHN1cGFiYXNlXG4iXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50Iiwic3VwYWJhc2VVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMIiwic3VwYWJhc2VLZXkiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSIsInN1cGFiYXNlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./services/lib/supabase.ts\n");

/***/ }),

/***/ "(rsc)/./utils/index.ts":
/*!************************!*\
  !*** ./utils/index.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prompt: () => (/* reexport safe */ _prompt__WEBPACK_IMPORTED_MODULE_0__.prompt)\n/* harmony export */ });\n/* harmony import */ var _prompt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prompt */ \"(rsc)/./utils/prompt.ts\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9pbmRleC50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUF3QiIsInNvdXJjZXMiOlsiL1VzZXJzL2FjYm94bGl1L3Byb2plY3RzL2Jpam9uL2VjaG9haS91dGlscy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL3Byb21wdCdcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./utils/index.ts\n");

/***/ }),

/***/ "(rsc)/./utils/prompt.ts":
/*!*************************!*\
  !*** ./utils/prompt.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prompt: () => (/* binding */ prompt)\n/* harmony export */ });\n// Read a prompt template from a .prompts file and replace <:insert:variable> with the value of the variable\nfunction prompt(content, inserts = {}, path = './prompts/') {\n    return content.replace(/\\<:insert:(\\w+)\\>/g, (_, key)=>inserts[key]);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9wcm9tcHQudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDRHQUE0RztBQUNyRyxTQUFTQSxPQUFPQyxPQUFlLEVBQUVDLFVBQWtDLENBQUMsQ0FBQyxFQUFFQyxPQUFlLFlBQVk7SUFDdkcsT0FBT0YsUUFBUUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDQyxHQUFXQyxNQUFnQkosT0FBTyxDQUFDSSxJQUFJO0FBQ3ZGIiwic291cmNlcyI6WyIvVXNlcnMvYWNib3hsaXUvcHJvamVjdHMvYmlqb24vZWNob2FpL3V0aWxzL3Byb21wdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBSZWFkIGEgcHJvbXB0IHRlbXBsYXRlIGZyb20gYSAucHJvbXB0cyBmaWxlIGFuZCByZXBsYWNlIDw6aW5zZXJ0OnZhcmlhYmxlPiB3aXRoIHRoZSB2YWx1ZSBvZiB0aGUgdmFyaWFibGVcbmV4cG9ydCBmdW5jdGlvbiBwcm9tcHQoY29udGVudDogc3RyaW5nLCBpbnNlcnRzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge30sIHBhdGg6IHN0cmluZyA9ICcuL3Byb21wdHMvJykge1xuICByZXR1cm4gY29udGVudC5yZXBsYWNlKC9cXDw6aW5zZXJ0OihcXHcrKVxcPi9nLCAoXzogc3RyaW5nLCBrZXk6IHN0cmluZykgPT4gaW5zZXJ0c1trZXldKVxufVxuIl0sIm5hbWVzIjpbInByb21wdCIsImNvbnRlbnQiLCJpbnNlcnRzIiwicGF0aCIsInJlcGxhY2UiLCJfIiwia2V5Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./utils/prompt.ts\n");

/***/ }),

/***/ "(rsc)/./utils/providers/anthropic.ts":
/*!**************************************!*\
  !*** ./utils/providers/anthropic.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   anthropic: () => (/* binding */ anthropic)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"(rsc)/./node_modules/.pnpm/openai@4.90.0_ws@8.18.1/node_modules/openai/index.mjs\");\nconst BASE_URL = process.env.ANTHROPIC_BASE_URL;\nconst API_KEY = process.env.ANTHROPIC_API_KEY;\n\nfunction anthropic() {\n    return new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAI({\n        baseURL: BASE_URL,\n        apiKey: API_KEY\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9wcm92aWRlcnMvYW50aHJvcGljLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTUEsV0FBV0MsUUFBUUMsR0FBRyxDQUFDQyxrQkFBa0I7QUFDL0MsTUFBTUMsVUFBVUgsUUFBUUMsR0FBRyxDQUFDRyxpQkFBaUI7QUFFYjtBQUV6QixTQUFTRTtJQUNkLE9BQU8sSUFBSUQsMENBQU1BLENBQUM7UUFDaEJFLFNBQVNSO1FBQ1RTLFFBQVFMO0lBQ1Y7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL2FjYm94bGl1L3Byb2plY3RzL2Jpam9uL2VjaG9haS91dGlscy9wcm92aWRlcnMvYW50aHJvcGljLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEJBU0VfVVJMID0gcHJvY2Vzcy5lbnYuQU5USFJPUElDX0JBU0VfVVJMIVxuY29uc3QgQVBJX0tFWSA9IHByb2Nlc3MuZW52LkFOVEhST1BJQ19BUElfS0VZIVxuXG5pbXBvcnQgeyBPcGVuQUkgfSBmcm9tIFwib3BlbmFpXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhbnRocm9waWMoKSB7XG4gIHJldHVybiBuZXcgT3BlbkFJKHtcbiAgICBiYXNlVVJMOiBCQVNFX1VSTCxcbiAgICBhcGlLZXk6IEFQSV9LRVksXG4gIH0pXG59Il0sIm5hbWVzIjpbIkJBU0VfVVJMIiwicHJvY2VzcyIsImVudiIsIkFOVEhST1BJQ19CQVNFX1VSTCIsIkFQSV9LRVkiLCJBTlRIUk9QSUNfQVBJX0tFWSIsIk9wZW5BSSIsImFudGhyb3BpYyIsImJhc2VVUkwiLCJhcGlLZXkiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./utils/providers/anthropic.ts\n");

/***/ }),

/***/ "(rsc)/./utils/providers/deepseek.ts":
/*!*************************************!*\
  !*** ./utils/providers/deepseek.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deepseek: () => (/* binding */ deepseek)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"(rsc)/./node_modules/.pnpm/openai@4.90.0_ws@8.18.1/node_modules/openai/index.mjs\");\nconst BASE_URL = process.env.DEEPSEEK_BASE_URL;\nconst API_KEY = process.env.DEEPSEEK_API_KEY;\n\nfunction deepseek() {\n    return new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAI({\n        baseURL: BASE_URL,\n        apiKey: API_KEY\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9wcm92aWRlcnMvZGVlcHNlZWsudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNQSxXQUFXQyxRQUFRQyxHQUFHLENBQUNDLGlCQUFpQjtBQUM5QyxNQUFNQyxVQUFVSCxRQUFRQyxHQUFHLENBQUNHLGdCQUFnQjtBQUVaO0FBRXpCLFNBQVNFO0lBQ2QsT0FBTyxJQUFJRCwwQ0FBTUEsQ0FBQztRQUNoQkUsU0FBU1I7UUFDVFMsUUFBUUw7SUFDVjtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMvYWNib3hsaXUvcHJvamVjdHMvYmlqb24vZWNob2FpL3V0aWxzL3Byb3ZpZGVycy9kZWVwc2Vlay50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBCQVNFX1VSTCA9IHByb2Nlc3MuZW52LkRFRVBTRUVLX0JBU0VfVVJMIVxuY29uc3QgQVBJX0tFWSA9IHByb2Nlc3MuZW52LkRFRVBTRUVLX0FQSV9LRVkhXG5cbmltcG9ydCB7IE9wZW5BSSB9IGZyb20gXCJvcGVuYWlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBzZWVrKCkge1xuICByZXR1cm4gbmV3IE9wZW5BSSh7XG4gICAgYmFzZVVSTDogQkFTRV9VUkwsXG4gICAgYXBpS2V5OiBBUElfS0VZLFxuICB9KVxufSJdLCJuYW1lcyI6WyJCQVNFX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJERUVQU0VFS19CQVNFX1VSTCIsIkFQSV9LRVkiLCJERUVQU0VFS19BUElfS0VZIiwiT3BlbkFJIiwiZGVlcHNlZWsiLCJiYXNlVVJMIiwiYXBpS2V5Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./utils/providers/deepseek.ts\n");

/***/ }),

/***/ "(rsc)/./utils/providers/dify.ts":
/*!*********************************!*\
  !*** ./utils/providers/dify.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   search: () => (/* binding */ search)\n/* harmony export */ });\nconst DIFY_URL = process.env.DIFY_URL;\nconst DIFY_DATASET_ID = process.env.DIFY_DATASET_ID;\nconst DIFY_DATASET_API_KEY = process.env.DIFY_DATASET_API_KEY;\nasync function search(query) {\n    const response = await fetch(`${DIFY_URL}/v1/datasets/${DIFY_DATASET_ID}/retrieve`, {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json',\n            'Authorization': `Bearer ${DIFY_DATASET_API_KEY}`\n        },\n        body: JSON.stringify({\n            query\n        })\n    });\n    const data = await response.json();\n    // deno-lint-ignore no-explicit-any\n    console.log(data);\n    return data.records.map((record)=>record.segment.content);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9wcm92aWRlcnMvZGlmeS50cyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsV0FBV0MsUUFBUUMsR0FBRyxDQUFDRixRQUFRO0FBQ3JDLE1BQU1HLGtCQUFrQkYsUUFBUUMsR0FBRyxDQUFDQyxlQUFlO0FBQ25ELE1BQU1DLHVCQUF1QkgsUUFBUUMsR0FBRyxDQUFDRSxvQkFBb0I7QUFFdEQsZUFBZUMsT0FBT0MsS0FBYTtJQUN4QyxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sR0FBR1IsU0FBUyxhQUFhLEVBQUVHLGdCQUFnQixTQUFTLENBQUMsRUFBRTtRQUNsRk0sUUFBUTtRQUNSQyxTQUFTO1lBQ1AsZ0JBQWdCO1lBQ2hCLGlCQUFpQixDQUFDLE9BQU8sRUFBRU4sc0JBQXNCO1FBQ25EO1FBQ0FPLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztZQUNuQlA7UUFDRjtJQUNGO0lBQ0EsTUFBTVEsT0FBTyxNQUFNUCxTQUFTUSxJQUFJO0lBQ2hDLG1DQUFtQztJQUNuQ0MsUUFBUUMsR0FBRyxDQUFDSDtJQUNaLE9BQU9BLEtBQUtJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLFNBQWdCQSxPQUFPQyxPQUFPLENBQUNDLE9BQU87QUFDakUiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hY2JveGxpdS9wcm9qZWN0cy9iaWpvbi9lY2hvYWkvdXRpbHMvcHJvdmlkZXJzL2RpZnkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRElGWV9VUkwgPSBwcm9jZXNzLmVudi5ESUZZX1VSTCFcbmNvbnN0IERJRllfREFUQVNFVF9JRCA9IHByb2Nlc3MuZW52LkRJRllfREFUQVNFVF9JRCFcbmNvbnN0IERJRllfREFUQVNFVF9BUElfS0VZID0gcHJvY2Vzcy5lbnYuRElGWV9EQVRBU0VUX0FQSV9LRVkhXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZWFyY2gocXVlcnk6IHN0cmluZykge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0RJRllfVVJMfS92MS9kYXRhc2V0cy8ke0RJRllfREFUQVNFVF9JRH0vcmV0cmlldmVgLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke0RJRllfREFUQVNFVF9BUElfS0VZfWBcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHF1ZXJ5LFxuICAgIH0pXG4gIH0pXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgLy8gZGVuby1saW50LWlnbm9yZSBuby1leHBsaWNpdC1hbnlcbiAgY29uc29sZS5sb2coZGF0YSlcbiAgcmV0dXJuIGRhdGEucmVjb3Jkcy5tYXAoKHJlY29yZDogYW55KSA9PiByZWNvcmQuc2VnbWVudC5jb250ZW50KSBhcyBzdHJpbmdbXVxufVxuIl0sIm5hbWVzIjpbIkRJRllfVVJMIiwicHJvY2VzcyIsImVudiIsIkRJRllfREFUQVNFVF9JRCIsIkRJRllfREFUQVNFVF9BUElfS0VZIiwic2VhcmNoIiwicXVlcnkiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwicmVjb3JkcyIsIm1hcCIsInJlY29yZCIsInNlZ21lbnQiLCJjb250ZW50Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./utils/providers/dify.ts\n");

/***/ }),

/***/ "(rsc)/./utils/providers/gemini.ts":
/*!***********************************!*\
  !*** ./utils/providers/gemini.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gemini: () => (/* binding */ gemini)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"(rsc)/./node_modules/.pnpm/openai@4.90.0_ws@8.18.1/node_modules/openai/index.mjs\");\nconst BASE_URL = process.env.GEMINI_BASE_URL;\nconst API_KEY = process.env.GEMINI_API_KEY;\n\nfunction gemini() {\n    return new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAI({\n        baseURL: BASE_URL,\n        apiKey: API_KEY\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9wcm92aWRlcnMvZ2VtaW5pLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTUEsV0FBV0MsUUFBUUMsR0FBRyxDQUFDQyxlQUFlO0FBQzVDLE1BQU1DLFVBQVVILFFBQVFDLEdBQUcsQ0FBQ0csY0FBYztBQUVWO0FBRXpCLFNBQVNFO0lBQ2QsT0FBTyxJQUFJRCwwQ0FBTUEsQ0FBQztRQUNoQkUsU0FBU1I7UUFDVFMsUUFBUUw7SUFDVjtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMvYWNib3hsaXUvcHJvamVjdHMvYmlqb24vZWNob2FpL3V0aWxzL3Byb3ZpZGVycy9nZW1pbmkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQkFTRV9VUkwgPSBwcm9jZXNzLmVudi5HRU1JTklfQkFTRV9VUkwhXG5jb25zdCBBUElfS0VZID0gcHJvY2Vzcy5lbnYuR0VNSU5JX0FQSV9LRVkhXG5cbmltcG9ydCB7IE9wZW5BSSB9IGZyb20gXCJvcGVuYWlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdlbWluaSgpIHtcbiAgcmV0dXJuIG5ldyBPcGVuQUkoe1xuICAgIGJhc2VVUkw6IEJBU0VfVVJMLFxuICAgIGFwaUtleTogQVBJX0tFWSxcbiAgfSlcbn0iXSwibmFtZXMiOlsiQkFTRV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiR0VNSU5JX0JBU0VfVVJMIiwiQVBJX0tFWSIsIkdFTUlOSV9BUElfS0VZIiwiT3BlbkFJIiwiZ2VtaW5pIiwiYmFzZVVSTCIsImFwaUtleSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./utils/providers/gemini.ts\n");

/***/ }),

/***/ "(rsc)/./utils/providers/index.ts":
/*!**********************************!*\
  !*** ./utils/providers/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   anthropic: () => (/* reexport safe */ _anthropic__WEBPACK_IMPORTED_MODULE_4__.anthropic),\n/* harmony export */   deepseek: () => (/* reexport safe */ _deepseek__WEBPACK_IMPORTED_MODULE_3__.deepseek),\n/* harmony export */   gemini: () => (/* reexport safe */ _gemini__WEBPACK_IMPORTED_MODULE_2__.gemini),\n/* harmony export */   openai: () => (/* reexport safe */ _openai__WEBPACK_IMPORTED_MODULE_0__.openai),\n/* harmony export */   qwen: () => (/* reexport safe */ _qwen__WEBPACK_IMPORTED_MODULE_1__.qwen),\n/* harmony export */   search: () => (/* reexport safe */ _dify__WEBPACK_IMPORTED_MODULE_5__.search)\n/* harmony export */ });\n/* harmony import */ var _openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./openai */ \"(rsc)/./utils/providers/openai.ts\");\n/* harmony import */ var _qwen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qwen */ \"(rsc)/./utils/providers/qwen.ts\");\n/* harmony import */ var _gemini__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gemini */ \"(rsc)/./utils/providers/gemini.ts\");\n/* harmony import */ var _deepseek__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deepseek */ \"(rsc)/./utils/providers/deepseek.ts\");\n/* harmony import */ var _anthropic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./anthropic */ \"(rsc)/./utils/providers/anthropic.ts\");\n/* harmony import */ var _dify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dify */ \"(rsc)/./utils/providers/dify.ts\");\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9wcm92aWRlcnMvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXdCO0FBQ0Y7QUFDRTtBQUNFO0FBQ0M7QUFDTCIsInNvdXJjZXMiOlsiL1VzZXJzL2FjYm94bGl1L3Byb2plY3RzL2Jpam9uL2VjaG9haS91dGlscy9wcm92aWRlcnMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9vcGVuYWknXG5leHBvcnQgKiBmcm9tICcuL3F3ZW4nXG5leHBvcnQgKiBmcm9tICcuL2dlbWluaSdcbmV4cG9ydCAqIGZyb20gJy4vZGVlcHNlZWsnXG5leHBvcnQgKiBmcm9tICcuL2FudGhyb3BpYydcbmV4cG9ydCAqIGZyb20gJy4vZGlmeSdcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./utils/providers/index.ts\n");

/***/ }),

/***/ "(rsc)/./utils/providers/openai.ts":
/*!***********************************!*\
  !*** ./utils/providers/openai.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   openai: () => (/* binding */ openai)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"(rsc)/./node_modules/.pnpm/openai@4.90.0_ws@8.18.1/node_modules/openai/index.mjs\");\nconst BASE_URL = process.env.OPENAI_BASE_URL;\nconst API_KEY = process.env.OPENAI_API_KEY;\n\nfunction openai() {\n    return new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAI({\n        baseURL: BASE_URL,\n        apiKey: API_KEY\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9wcm92aWRlcnMvb3BlbmFpLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTUEsV0FBV0MsUUFBUUMsR0FBRyxDQUFDQyxlQUFlO0FBQzVDLE1BQU1DLFVBQVVILFFBQVFDLEdBQUcsQ0FBQ0csY0FBYztBQUVWO0FBRXpCLFNBQVNFO0lBQ2QsT0FBTyxJQUFJRCwwQ0FBTUEsQ0FBQztRQUNoQkUsU0FBU1I7UUFDVFMsUUFBUUw7SUFDVjtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMvYWNib3hsaXUvcHJvamVjdHMvYmlqb24vZWNob2FpL3V0aWxzL3Byb3ZpZGVycy9vcGVuYWkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQkFTRV9VUkwgPSBwcm9jZXNzLmVudi5PUEVOQUlfQkFTRV9VUkwhXG5jb25zdCBBUElfS0VZID0gcHJvY2Vzcy5lbnYuT1BFTkFJX0FQSV9LRVkhXG5cbmltcG9ydCB7IE9wZW5BSSB9IGZyb20gXCJvcGVuYWlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5haSgpIHtcbiAgcmV0dXJuIG5ldyBPcGVuQUkoe1xuICAgIGJhc2VVUkw6IEJBU0VfVVJMLFxuICAgIGFwaUtleTogQVBJX0tFWSxcbiAgfSlcbn0iXSwibmFtZXMiOlsiQkFTRV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0JBU0VfVVJMIiwiQVBJX0tFWSIsIk9QRU5BSV9BUElfS0VZIiwiT3BlbkFJIiwib3BlbmFpIiwiYmFzZVVSTCIsImFwaUtleSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./utils/providers/openai.ts\n");

/***/ }),

/***/ "(rsc)/./utils/providers/qwen.ts":
/*!*********************************!*\
  !*** ./utils/providers/qwen.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   qwen: () => (/* binding */ qwen)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"(rsc)/./node_modules/.pnpm/openai@4.90.0_ws@8.18.1/node_modules/openai/index.mjs\");\nconst BASE_URL = process.env.QWEN_BASE_URL;\nconst API_KEY = process.env.QWEN_API_KEY;\n\nfunction qwen() {\n    return new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAI({\n        baseURL: BASE_URL,\n        apiKey: API_KEY\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9wcm92aWRlcnMvcXdlbi50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLE1BQU1BLFdBQVdDLFFBQVFDLEdBQUcsQ0FBQ0MsYUFBYTtBQUMxQyxNQUFNQyxVQUFVSCxRQUFRQyxHQUFHLENBQUNHLFlBQVk7QUFFUjtBQUV6QixTQUFTRTtJQUNkLE9BQU8sSUFBSUQsMENBQU1BLENBQUM7UUFDaEJFLFNBQVNSO1FBQ1RTLFFBQVFMO0lBQ1Y7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL2FjYm94bGl1L3Byb2plY3RzL2Jpam9uL2VjaG9haS91dGlscy9wcm92aWRlcnMvcXdlbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBCQVNFX1VSTCA9IHByb2Nlc3MuZW52LlFXRU5fQkFTRV9VUkwhXG5jb25zdCBBUElfS0VZID0gcHJvY2Vzcy5lbnYuUVdFTl9BUElfS0VZIVxuXG5pbXBvcnQgeyBPcGVuQUkgfSBmcm9tIFwib3BlbmFpXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBxd2VuKCkge1xuICByZXR1cm4gbmV3IE9wZW5BSSh7XG4gICAgYmFzZVVSTDogQkFTRV9VUkwsXG4gICAgYXBpS2V5OiBBUElfS0VZLFxuICB9KVxufSJdLCJuYW1lcyI6WyJCQVNFX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJRV0VOX0JBU0VfVVJMIiwiQVBJX0tFWSIsIlFXRU5fQVBJX0tFWSIsIk9wZW5BSSIsInF3ZW4iLCJiYXNlVVJMIiwiYXBpS2V5Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./utils/providers/qwen.ts\n");

/***/ }),

/***/ "(rsc)/./workflow/layout/index.ts":
/*!**********************************!*\
  !*** ./workflow/layout/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   startLayoutWorkflow: () => (/* binding */ startLayoutWorkflow)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils */ \"(rsc)/./utils/index.ts\");\n/* harmony import */ var _prompts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prompts */ \"(rsc)/./workflow/layout/prompts.ts\");\n/* harmony import */ var _config_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/config/client */ \"(rsc)/./config/client.ts\");\n\n\n\nconst provider = _config_client__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_PROVIDER;\nconst defaultModel = _config_client__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_LAYOUT_MODEL;\nasync function startLayoutWorkflow(context, options) {\n    const { prompt: promptOption, step, problem, knowledge, explanation, conclusion, model: modelOption } = options;\n    const model = modelOption ?? defaultModel;\n    if (context.length === 0) {\n        context.push({\n            role: 'system',\n            content: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.prompt)(_prompts__WEBPACK_IMPORTED_MODULE_1__.SYSTEM)\n        });\n    }\n    context.push({\n        role: 'user',\n        content: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.prompt)(_prompts__WEBPACK_IMPORTED_MODULE_1__.USER, {\n            step,\n            problem,\n            knowledge,\n            explanation,\n            conclusion,\n            prompt: promptOption\n        })\n    });\n    const response = await provider.chat.completions.create({\n        model,\n        messages: context\n    });\n    context.push(response.choices[0].message);\n    return response.choices[0].message.content;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi93b3JrZmxvdy9sYXlvdXQvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFnQztBQUNRO0FBQ2dDO0FBR3hFLE1BQU1LLFdBQVdGLDREQUFnQkE7QUFDakMsTUFBTUcsZUFBZUYsZ0VBQW9CQTtBQVlsQyxlQUFlRyxvQkFDcEJDLE9BQXFDLEVBQ3JDQyxPQUE4QjtJQUM5QixNQUFNLEVBQUVULFFBQVFVLFlBQVksRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxVQUFVLEVBQUVDLE9BQU9DLFdBQVcsRUFBRSxHQUFHUjtJQUN4RyxNQUFNTyxRQUFRQyxlQUFlWDtJQUU3QixJQUFJRSxRQUFRVSxNQUFNLEtBQUssR0FBRztRQUN4QlYsUUFBUVcsSUFBSSxDQUNWO1lBQ0VDLE1BQU07WUFDTkMsU0FBU3JCLDhDQUFNQSxDQUFDQyw0Q0FBTUE7UUFDeEI7SUFFSjtJQUNBTyxRQUFRVyxJQUFJLENBQUM7UUFDWEMsTUFBTTtRQUNOQyxTQUFTckIsOENBQU1BLENBQUNFLDBDQUFJQSxFQUFFO1lBQUVTO1lBQU1DO1lBQVNDO1lBQVdDO1lBQWFDO1lBQVlmLFFBQVFVO1FBQWE7SUFDbEc7SUFFQSxNQUFNWSxXQUFXLE1BQU1qQixTQUFTa0IsSUFBSSxDQUFDQyxXQUFXLENBQUNDLE1BQU0sQ0FBQztRQUN0RFQ7UUFDQVUsVUFBVWxCO0lBQ1o7SUFFQUEsUUFBUVcsSUFBSSxDQUFDRyxTQUFTSyxPQUFPLENBQUMsRUFBRSxDQUFDQyxPQUFPO0lBRXhDLE9BQU9OLFNBQVNLLE9BQU8sQ0FBQyxFQUFFLENBQUNDLE9BQU8sQ0FBQ1AsT0FBTztBQUM1QyIsInNvdXJjZXMiOlsiL1VzZXJzL2FjYm94bGl1L3Byb2plY3RzL2Jpam9uL2VjaG9haS93b3JrZmxvdy9sYXlvdXQvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJvbXB0IH0gZnJvbSBcIkAvdXRpbHNcIlxuaW1wb3J0IHsgU1lTVEVNLCBVU0VSIH0gZnJvbSBcIi4vcHJvbXB0c1wiXG5pbXBvcnQgeyBERUZBVUxUX1BST1ZJREVSLCBERUZBVUxUX0xBWU9VVF9NT0RFTCB9IGZyb20gXCJAL2NvbmZpZy9jbGllbnRcIlxuaW1wb3J0IHsgQ2hhdENvbXBsZXRpb25NZXNzYWdlUGFyYW0gfSBmcm9tIFwib3BlbmFpL3Jlc291cmNlcy5tanNcIlxuXG5jb25zdCBwcm92aWRlciA9IERFRkFVTFRfUFJPVklERVJcbmNvbnN0IGRlZmF1bHRNb2RlbCA9IERFRkFVTFRfTEFZT1VUX01PREVMXG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF5b3V0V29ya2Zsb3dPcHRpb25zIHtcbiAgcHJvbXB0OiBzdHJpbmdcbiAgc3RlcDogc3RyaW5nXG4gIHByb2JsZW06IHN0cmluZ1xuICBrbm93bGVkZ2U6IHN0cmluZ1xuICBleHBsYW5hdGlvbjogc3RyaW5nXG4gIGNvbmNsdXNpb246IHN0cmluZ1xuICBtb2RlbD86IHN0cmluZ1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RhcnRMYXlvdXRXb3JrZmxvdyhcbiAgY29udGV4dDogQ2hhdENvbXBsZXRpb25NZXNzYWdlUGFyYW1bXSxcbiAgb3B0aW9uczogTGF5b3V0V29ya2Zsb3dPcHRpb25zKSB7XG4gIGNvbnN0IHsgcHJvbXB0OiBwcm9tcHRPcHRpb24sIHN0ZXAsIHByb2JsZW0sIGtub3dsZWRnZSwgZXhwbGFuYXRpb24sIGNvbmNsdXNpb24sIG1vZGVsOiBtb2RlbE9wdGlvbiB9ID0gb3B0aW9uc1xuICBjb25zdCBtb2RlbCA9IG1vZGVsT3B0aW9uID8/IGRlZmF1bHRNb2RlbFxuXG4gIGlmIChjb250ZXh0Lmxlbmd0aCA9PT0gMCkge1xuICAgIGNvbnRleHQucHVzaChcbiAgICAgIHtcbiAgICAgICAgcm9sZTogJ3N5c3RlbScsXG4gICAgICAgIGNvbnRlbnQ6IHByb21wdChTWVNURU0pLFxuICAgICAgfVxuICAgIClcbiAgfVxuICBjb250ZXh0LnB1c2goe1xuICAgIHJvbGU6ICd1c2VyJyxcbiAgICBjb250ZW50OiBwcm9tcHQoVVNFUiwgeyBzdGVwLCBwcm9ibGVtLCBrbm93bGVkZ2UsIGV4cGxhbmF0aW9uLCBjb25jbHVzaW9uLCBwcm9tcHQ6IHByb21wdE9wdGlvbiB9KSxcbiAgfSlcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHByb3ZpZGVyLmNoYXQuY29tcGxldGlvbnMuY3JlYXRlKHtcbiAgICBtb2RlbCxcbiAgICBtZXNzYWdlczogY29udGV4dFxuICB9KVxuXG4gIGNvbnRleHQucHVzaChyZXNwb25zZS5jaG9pY2VzWzBdLm1lc3NhZ2UpXG5cbiAgcmV0dXJuIHJlc3BvbnNlLmNob2ljZXNbMF0ubWVzc2FnZS5jb250ZW50XG59Il0sIm5hbWVzIjpbInByb21wdCIsIlNZU1RFTSIsIlVTRVIiLCJERUZBVUxUX1BST1ZJREVSIiwiREVGQVVMVF9MQVlPVVRfTU9ERUwiLCJwcm92aWRlciIsImRlZmF1bHRNb2RlbCIsInN0YXJ0TGF5b3V0V29ya2Zsb3ciLCJjb250ZXh0Iiwib3B0aW9ucyIsInByb21wdE9wdGlvbiIsInN0ZXAiLCJwcm9ibGVtIiwia25vd2xlZGdlIiwiZXhwbGFuYXRpb24iLCJjb25jbHVzaW9uIiwibW9kZWwiLCJtb2RlbE9wdGlvbiIsImxlbmd0aCIsInB1c2giLCJyb2xlIiwiY29udGVudCIsInJlc3BvbnNlIiwiY2hhdCIsImNvbXBsZXRpb25zIiwiY3JlYXRlIiwibWVzc2FnZXMiLCJjaG9pY2VzIiwibWVzc2FnZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./workflow/layout/index.ts\n");

/***/ }),

/***/ "(rsc)/./workflow/layout/prompts.ts":
/*!************************************!*\
  !*** ./workflow/layout/prompts.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SYSTEM: () => (/* binding */ SYSTEM),\n/* harmony export */   USER: () => (/* binding */ USER)\n/* harmony export */ });\nconst SYSTEM = `\nYou are a content layout designer, your task is that use natural language to describe how to layout the whiteboard and what figures should be drawn on.\n\nYour description should include and ONLY include the following points:\n- Divide the whiteboard into multiple areas\n  + rows or columns to divide the whiteboard.\n  + rows or columns to divide the row/column into.\n- Draw table to show informations\n  + table head and side\n  + the concrete content of each cell\n  + or, the description of the law or formula\n- Draw mathematical figures\n  + system coordinate, provide the origin, domain and range\n  + function figure, give the full expression and the domain\n  + parametric figure, give the full expression of x and y\n  + vector, give the concrete number or algebraic expression\n  + angle, give the concrete number or algebraic expression\n  + geometry-based figure, give the concrete number or algebraic expression, or the description of the geometric properties (e.g. let line DC normal to line AB)\n\nIn following steps, I will provide some steps need to be designed and described, the information will include:\n\n- A sequential step number\n- A clear problem-solving process or concept introduction\n- The essential knowledge points needed for this step\n- Detailed guidance on how teachers should explain this content\n- A concrete conclusion or key takeaway from this step\n\nWhen you complete a design, the user may arise an additional requirement, your choice could be describe the additional layout and figures based on the previous description, or call the tool to create a new page or switch to previous page.\n`;\nconst USER = `\nThe requirement form user is:\n\n\\`\\`\\`markdown\n<:insert:prompt>\n\\`\\`\\`\n\nSTEP: <:insert:step>\n\nPROBLEM: <:insert:problem>\n\nKNOWLEDGE: <:insert:knowledge>\n\nEXPLANATION: <:insert:explanation>\n\nCONCLUSION: <:insert:conclusion>\n\nNow, please describe the layout and figures based on the information above. \n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi93b3JrZmxvdy9sYXlvdXQvcHJvbXB0cy50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPLE1BQU1BLFNBQVMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCdkIsQ0FBQztBQUVNLE1BQU1DLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JyQixDQUFDIiwic291cmNlcyI6WyIvVXNlcnMvYWNib3hsaXUvcHJvamVjdHMvYmlqb24vZWNob2FpL3dvcmtmbG93L2xheW91dC9wcm9tcHRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBTWVNURU0gPSBgXG5Zb3UgYXJlIGEgY29udGVudCBsYXlvdXQgZGVzaWduZXIsIHlvdXIgdGFzayBpcyB0aGF0IHVzZSBuYXR1cmFsIGxhbmd1YWdlIHRvIGRlc2NyaWJlIGhvdyB0byBsYXlvdXQgdGhlIHdoaXRlYm9hcmQgYW5kIHdoYXQgZmlndXJlcyBzaG91bGQgYmUgZHJhd24gb24uXG5cbllvdXIgZGVzY3JpcHRpb24gc2hvdWxkIGluY2x1ZGUgYW5kIE9OTFkgaW5jbHVkZSB0aGUgZm9sbG93aW5nIHBvaW50czpcbi0gRGl2aWRlIHRoZSB3aGl0ZWJvYXJkIGludG8gbXVsdGlwbGUgYXJlYXNcbiAgKyByb3dzIG9yIGNvbHVtbnMgdG8gZGl2aWRlIHRoZSB3aGl0ZWJvYXJkLlxuICArIHJvd3Mgb3IgY29sdW1ucyB0byBkaXZpZGUgdGhlIHJvdy9jb2x1bW4gaW50by5cbi0gRHJhdyB0YWJsZSB0byBzaG93IGluZm9ybWF0aW9uc1xuICArIHRhYmxlIGhlYWQgYW5kIHNpZGVcbiAgKyB0aGUgY29uY3JldGUgY29udGVudCBvZiBlYWNoIGNlbGxcbiAgKyBvciwgdGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBsYXcgb3IgZm9ybXVsYVxuLSBEcmF3IG1hdGhlbWF0aWNhbCBmaWd1cmVzXG4gICsgc3lzdGVtIGNvb3JkaW5hdGUsIHByb3ZpZGUgdGhlIG9yaWdpbiwgZG9tYWluIGFuZCByYW5nZVxuICArIGZ1bmN0aW9uIGZpZ3VyZSwgZ2l2ZSB0aGUgZnVsbCBleHByZXNzaW9uIGFuZCB0aGUgZG9tYWluXG4gICsgcGFyYW1ldHJpYyBmaWd1cmUsIGdpdmUgdGhlIGZ1bGwgZXhwcmVzc2lvbiBvZiB4IGFuZCB5XG4gICsgdmVjdG9yLCBnaXZlIHRoZSBjb25jcmV0ZSBudW1iZXIgb3IgYWxnZWJyYWljIGV4cHJlc3Npb25cbiAgKyBhbmdsZSwgZ2l2ZSB0aGUgY29uY3JldGUgbnVtYmVyIG9yIGFsZ2VicmFpYyBleHByZXNzaW9uXG4gICsgZ2VvbWV0cnktYmFzZWQgZmlndXJlLCBnaXZlIHRoZSBjb25jcmV0ZSBudW1iZXIgb3IgYWxnZWJyYWljIGV4cHJlc3Npb24sIG9yIHRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgZ2VvbWV0cmljIHByb3BlcnRpZXMgKGUuZy4gbGV0IGxpbmUgREMgbm9ybWFsIHRvIGxpbmUgQUIpXG5cbkluIGZvbGxvd2luZyBzdGVwcywgSSB3aWxsIHByb3ZpZGUgc29tZSBzdGVwcyBuZWVkIHRvIGJlIGRlc2lnbmVkIGFuZCBkZXNjcmliZWQsIHRoZSBpbmZvcm1hdGlvbiB3aWxsIGluY2x1ZGU6XG5cbi0gQSBzZXF1ZW50aWFsIHN0ZXAgbnVtYmVyXG4tIEEgY2xlYXIgcHJvYmxlbS1zb2x2aW5nIHByb2Nlc3Mgb3IgY29uY2VwdCBpbnRyb2R1Y3Rpb25cbi0gVGhlIGVzc2VudGlhbCBrbm93bGVkZ2UgcG9pbnRzIG5lZWRlZCBmb3IgdGhpcyBzdGVwXG4tIERldGFpbGVkIGd1aWRhbmNlIG9uIGhvdyB0ZWFjaGVycyBzaG91bGQgZXhwbGFpbiB0aGlzIGNvbnRlbnRcbi0gQSBjb25jcmV0ZSBjb25jbHVzaW9uIG9yIGtleSB0YWtlYXdheSBmcm9tIHRoaXMgc3RlcFxuXG5XaGVuIHlvdSBjb21wbGV0ZSBhIGRlc2lnbiwgdGhlIHVzZXIgbWF5IGFyaXNlIGFuIGFkZGl0aW9uYWwgcmVxdWlyZW1lbnQsIHlvdXIgY2hvaWNlIGNvdWxkIGJlIGRlc2NyaWJlIHRoZSBhZGRpdGlvbmFsIGxheW91dCBhbmQgZmlndXJlcyBiYXNlZCBvbiB0aGUgcHJldmlvdXMgZGVzY3JpcHRpb24sIG9yIGNhbGwgdGhlIHRvb2wgdG8gY3JlYXRlIGEgbmV3IHBhZ2Ugb3Igc3dpdGNoIHRvIHByZXZpb3VzIHBhZ2UuXG5gXG5cbmV4cG9ydCBjb25zdCBVU0VSID0gYFxuVGhlIHJlcXVpcmVtZW50IGZvcm0gdXNlciBpczpcblxuXFxgXFxgXFxgbWFya2Rvd25cbjw6aW5zZXJ0OnByb21wdD5cblxcYFxcYFxcYFxuXG5TVEVQOiA8Omluc2VydDpzdGVwPlxuXG5QUk9CTEVNOiA8Omluc2VydDpwcm9ibGVtPlxuXG5LTk9XTEVER0U6IDw6aW5zZXJ0Omtub3dsZWRnZT5cblxuRVhQTEFOQVRJT046IDw6aW5zZXJ0OmV4cGxhbmF0aW9uPlxuXG5DT05DTFVTSU9OOiA8Omluc2VydDpjb25jbHVzaW9uPlxuXG5Ob3csIHBsZWFzZSBkZXNjcmliZSB0aGUgbGF5b3V0IGFuZCBmaWd1cmVzIGJhc2VkIG9uIHRoZSBpbmZvcm1hdGlvbiBhYm92ZS4gXG5gXG4iXSwibmFtZXMiOlsiU1lTVEVNIiwiVVNFUiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./workflow/layout/prompts.ts\n");

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

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

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

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:fs");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:stream");

/***/ }),

/***/ "node:stream/web":
/*!**********************************!*\
  !*** external "node:stream/web" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:stream/web");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "worker_threads":
/*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("worker_threads");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0","vendor-chunks/tr46@0.0.3","vendor-chunks/@supabase+auth-js@2.69.1","vendor-chunks/@supabase+realtime-js@2.11.2","vendor-chunks/@supabase+postgrest-js@1.19.2","vendor-chunks/@supabase+node-fetch@2.6.15","vendor-chunks/whatwg-url@5.0.0","vendor-chunks/@supabase+storage-js@2.7.1","vendor-chunks/@supabase+supabase-js@2.49.3","vendor-chunks/@supabase+functions-js@2.4.4","vendor-chunks/webidl-conversions@3.0.1","vendor-chunks/formdata-node@4.4.1","vendor-chunks/openai@4.90.0_ws@8.18.1","vendor-chunks/web-streams-polyfill@4.0.0-beta.3","vendor-chunks/node-fetch@2.7.0","vendor-chunks/event-target-shim@5.0.1","vendor-chunks/agentkeepalive@4.6.0","vendor-chunks/form-data-encoder@1.7.2","vendor-chunks/abort-controller@3.0.0","vendor-chunks/ms@2.1.3","vendor-chunks/humanize-ms@1.2.1"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flayout%2Froute&page=%2Fapi%2Flayout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flayout%2Froute.ts&appDir=%2FUsers%2Facboxliu%2Fprojects%2Fbijon%2Fechoai%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Facboxliu%2Fprojects%2Fbijon%2Fechoai&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();