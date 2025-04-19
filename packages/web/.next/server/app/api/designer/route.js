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
exports.id = "app/api/designer/route";
exports.ids = ["app/api/designer/route"];
exports.modules = {

/***/ "(rsc)/./app/api/designer/route.ts":
/*!***********************************!*\
  !*** ./app/api/designer/route.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _services_designer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/designer */ \"(rsc)/./services/designer.ts\");\n\nasync function POST(request) {\n    const body = await request.json();\n    return (0,_services_designer__WEBPACK_IMPORTED_MODULE_0__.designer)(body, request.headers);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2Rlc2lnbmVyL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQStDO0FBRXhDLGVBQWVDLEtBQUtDLE9BQWdCO0lBQ3pDLE1BQU1DLE9BQU8sTUFBTUQsUUFBUUUsSUFBSTtJQUMvQixPQUFPSiw0REFBUUEsQ0FBQ0csTUFBTUQsUUFBUUcsT0FBTztBQUN2QyIsInNvdXJjZXMiOlsiL1VzZXJzL2FjYm94bGl1L3Byb2plY3RzL2Jpam9uL2VjaG9haS9hcHAvYXBpL2Rlc2lnbmVyL3JvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlc2lnbmVyIH0gZnJvbSBcIkAvc2VydmljZXMvZGVzaWduZXJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCBib2R5ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gIHJldHVybiBkZXNpZ25lcihib2R5LCByZXF1ZXN0LmhlYWRlcnMpO1xufVxuIl0sIm5hbWVzIjpbImRlc2lnbmVyIiwiUE9TVCIsInJlcXVlc3QiLCJib2R5IiwianNvbiIsImhlYWRlcnMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/designer/route.ts\n");

/***/ }),

/***/ "(rsc)/./config/client.ts":
/*!**************************!*\
  !*** ./config/client.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DEFAULT_CHALK_MODEL: () => (/* binding */ DEFAULT_CHALK_MODEL),\n/* harmony export */   DEFAULT_DESIGNER_MODEL: () => (/* binding */ DEFAULT_DESIGNER_MODEL),\n/* harmony export */   DEFAULT_LAYOUT_MODEL: () => (/* binding */ DEFAULT_LAYOUT_MODEL),\n/* harmony export */   DEFAULT_PROVIDER: () => (/* binding */ DEFAULT_PROVIDER),\n/* harmony export */   DEFAULT_SPEAKER_MODEL: () => (/* binding */ DEFAULT_SPEAKER_MODEL)\n/* harmony export */ });\n/* harmony import */ var _utils_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/providers */ \"(rsc)/./utils/providers/index.ts\");\n\nconst DEFAULT_PROVIDER = (0,_utils_providers__WEBPACK_IMPORTED_MODULE_0__.openai)();\nconst DEFAULT_DESIGNER_MODEL = 'deepseek-v3';\nconst DEFAULT_CHALK_MODEL = '';\nconst DEFAULT_SPEAKER_MODEL = 'deepseek-v3';\nconst DEFAULT_LAYOUT_MODEL = 'deepseek-v3';\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9jb25maWcvY2xpZW50LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyQztBQUVwQyxNQUFNQyxtQkFBbUJELHdEQUFNQSxHQUFFO0FBQ2pDLE1BQU1FLHlCQUF5QixjQUFhO0FBQzVDLE1BQU1DLHNCQUFzQixHQUFFO0FBQzlCLE1BQU1DLHdCQUF3QixjQUFhO0FBQzNDLE1BQU1DLHVCQUF1QixjQUFhIiwic291cmNlcyI6WyIvVXNlcnMvYWNib3hsaXUvcHJvamVjdHMvYmlqb24vZWNob2FpL2NvbmZpZy9jbGllbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb3BlbmFpIH0gZnJvbSBcIkAvdXRpbHMvcHJvdmlkZXJzXCI7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1BST1ZJREVSID0gb3BlbmFpKClcbmV4cG9ydCBjb25zdCBERUZBVUxUX0RFU0lHTkVSX01PREVMID0gJ2RlZXBzZWVrLXYzJ1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfQ0hBTEtfTU9ERUwgPSAnJ1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfU1BFQUtFUl9NT0RFTCA9ICdkZWVwc2Vlay12MydcbmV4cG9ydCBjb25zdCBERUZBVUxUX0xBWU9VVF9NT0RFTCA9ICdkZWVwc2Vlay12MydcbiJdLCJuYW1lcyI6WyJvcGVuYWkiLCJERUZBVUxUX1BST1ZJREVSIiwiREVGQVVMVF9ERVNJR05FUl9NT0RFTCIsIkRFRkFVTFRfQ0hBTEtfTU9ERUwiLCJERUZBVUxUX1NQRUFLRVJfTU9ERUwiLCJERUZBVUxUX0xBWU9VVF9NT0RFTCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./config/client.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdesigner%2Froute&page=%2Fapi%2Fdesigner%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdesigner%2Froute.ts&appDir=%2FUsers%2Facboxliu%2Fprojects%2Fbijon%2Fechoai%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Facboxliu%2Fprojects%2Fbijon%2Fechoai&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdesigner%2Froute&page=%2Fapi%2Fdesigner%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdesigner%2Froute.ts&appDir=%2FUsers%2Facboxliu%2Fprojects%2Fbijon%2Fechoai%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Facboxliu%2Fprojects%2Fbijon%2Fechoai&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/.pnpm/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/.pnpm/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_acboxliu_projects_bijon_echoai_app_api_designer_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/designer/route.ts */ \"(rsc)/./app/api/designer/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/designer/route\",\n        pathname: \"/api/designer\",\n        filename: \"route\",\n        bundlePath: \"app/api/designer/route\"\n    },\n    resolvedPagePath: \"/Users/acboxliu/projects/bijon/echoai/app/api/designer/route.ts\",\n    nextConfigOutput,\n    userland: _Users_acboxliu_projects_bijon_echoai_app_api_designer_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxNS4yLjJfcmVhY3QtZG9tQDE5LjAuMF9yZWFjdEAxOS4wLjBfX3JlYWN0QDE5LjAuMC9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZkZXNpZ25lciUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZGVzaWduZXIlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZkZXNpZ25lciUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmFjYm94bGl1JTJGcHJvamVjdHMlMkZiaWpvbiUyRmVjaG9haSUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZhY2JveGxpdSUyRnByb2plY3RzJTJGYmlqb24lMkZlY2hvYWkmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2U7QUFDNUY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9hY2JveGxpdS9wcm9qZWN0cy9iaWpvbi9lY2hvYWkvYXBwL2FwaS9kZXNpZ25lci9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZGVzaWduZXIvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9kZXNpZ25lclwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZGVzaWduZXIvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvYWNib3hsaXUvcHJvamVjdHMvYmlqb24vZWNob2FpL2FwcC9hcGkvZGVzaWduZXIvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdesigner%2Froute&page=%2Fapi%2Fdesigner%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdesigner%2Froute.ts&appDir=%2FUsers%2Facboxliu%2Fprojects%2Fbijon%2Fechoai%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Facboxliu%2Fprojects%2Fbijon%2Fechoai&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \*********************************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./services/designer.ts":
/*!******************************!*\
  !*** ./services/designer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   designer: () => (/* binding */ designer)\n/* harmony export */ });\n/* harmony import */ var _workflow_designer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/workflow/designer */ \"(rsc)/./workflow/designer/index.ts\");\n/* harmony import */ var _lib_supabase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/supabase */ \"(rsc)/./services/lib/supabase.ts\");\n\n\nasync function designer(body, headers) {\n    const token = headers.get(\"Authorization\")?.split(\" \")[1];\n    if (!token && process.env.UNAUTHORIZED_MODE !== \"true\") {\n        return new Response(\"Unauthorized\", {\n            status: 401\n        });\n    }\n    const userId = process.env.UNAUTHORIZED_MODE === \"true\" ? process.env.UNAUTHORIZED_MODE_USER_ID : (await _lib_supabase__WEBPACK_IMPORTED_MODULE_1__[\"default\"].auth.getUser(token)).data.user?.id;\n    const designerContext = await _lib_supabase__WEBPACK_IMPORTED_MODULE_1__[\"default\"].from('chats').select('uid, id, designer_context, displayed_messages, branches').eq('uid', userId).eq('id', body.chat_id).single();\n    if (designerContext.error) {\n        console.log(designerContext.error);\n        return new Response(\"Internal Server Error\", {\n            status: 500\n        });\n    }\n    const context = JSON.parse(designerContext.data.designer_context);\n    const steps = await (0,_workflow_designer__WEBPACK_IMPORTED_MODULE_0__.startDesignerWorkflow)(context, {\n        prompt: body.prompt,\n        refs: body.refs,\n        step: body.step,\n        model: body.model\n    });\n    const { data: updatedChat, error: updateError } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_1__[\"default\"].from('chats').update({\n        designer_context: JSON.stringify(context),\n        displayed_messages: JSON.stringify([\n            ...JSON.parse(designerContext.data.displayed_messages),\n            ...body.prompt ? [\n                {\n                    role: 'user',\n                    content: body.prompt\n                }\n            ] : [],\n            {\n                role: 'processor',\n                content: 'Designer'\n            }\n        ]),\n        branches: JSON.stringify([\n            ...JSON.parse(designerContext.data.branches),\n            {\n                steps,\n                start: body.step,\n                end: body.next_step\n            }\n        ])\n    }).eq('id', body.chat_id).select('displayed_messages, branches, id').single();\n    if (updateError) {\n        return new Response(\"Internal Server Error\", {\n            status: 500\n        });\n    }\n    return new Response(JSON.stringify({\n        steps,\n        branches: JSON.parse(updatedChat?.branches),\n        displayed_messages: JSON.parse(updatedChat?.displayed_messages)\n    }), {\n        status: 200\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zZXJ2aWNlcy9kZXNpZ25lci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0Y7QUFDaEQ7QUFtQi9CLGVBQWVFLFNBQVNDLElBQXlCLEVBQUVDLE9BQWdCO0lBQ3hFLE1BQU1DLFFBQVFELFFBQVFFLEdBQUcsQ0FBQyxrQkFBa0JDLE1BQU0sSUFBSSxDQUFDLEVBQUU7SUFDekQsSUFBSSxDQUFDRixTQUFTRyxRQUFRQyxHQUFHLENBQUNDLGlCQUFpQixLQUFLLFFBQVE7UUFDdEQsT0FBTyxJQUFJQyxTQUFTLGdCQUFnQjtZQUFFQyxRQUFRO1FBQUk7SUFDcEQ7SUFDQSxNQUFNQyxTQUNKTCxRQUFRQyxHQUFHLENBQUNDLGlCQUFpQixLQUFLLFNBQzlCRixRQUFRQyxHQUFHLENBQUNLLHlCQUF5QixHQUNyQyxDQUFDLE1BQU1iLHFEQUFRQSxDQUFDYyxJQUFJLENBQUNDLE9BQU8sQ0FBQ1gsTUFBSyxFQUFHWSxJQUFJLENBQUNDLElBQUksRUFBRUM7SUFFdEQsTUFBTUMsa0JBQWtCLE1BQU1uQixxREFBUUEsQ0FDbkNvQixJQUFJLENBQUMsU0FDTEMsTUFBTSxDQUFDLDJEQUNQQyxFQUFFLENBQUMsT0FBT1YsUUFDVlUsRUFBRSxDQUFDLE1BQU1wQixLQUFLcUIsT0FBTyxFQUNyQkMsTUFBTTtJQUVULElBQUlMLGdCQUFnQk0sS0FBSyxFQUFFO1FBQ3pCQyxRQUFRQyxHQUFHLENBQUNSLGdCQUFnQk0sS0FBSztRQUNqQyxPQUFPLElBQUlmLFNBQVMseUJBQXlCO1lBQUVDLFFBQVE7UUFBSTtJQUM3RDtJQUNBLE1BQU1pQixVQUFVQyxLQUFLQyxLQUFLLENBQUNYLGdCQUFnQkgsSUFBSSxDQUFDZSxnQkFBZ0I7SUFFaEUsTUFBTUMsUUFBUSxNQUFNakMseUVBQXFCQSxDQUFDNkIsU0FBUztRQUNqREssUUFBUS9CLEtBQUsrQixNQUFNO1FBQ25CQyxNQUFNaEMsS0FBS2dDLElBQUk7UUFDZkMsTUFBTWpDLEtBQUtpQyxJQUFJO1FBQ2ZDLE9BQU9sQyxLQUFLa0MsS0FBSztJQUNuQjtJQUVBLE1BQU0sRUFBRXBCLE1BQU1xQixXQUFXLEVBQUVaLE9BQU9hLFdBQVcsRUFBRSxHQUFHLE1BQU10QyxxREFBUUEsQ0FDN0RvQixJQUFJLENBQUMsU0FDTG1CLE1BQU0sQ0FBQztRQUNOUixrQkFBa0JGLEtBQUtXLFNBQVMsQ0FBQ1o7UUFDakNhLG9CQUFvQlosS0FBS1csU0FBUyxDQUFDO2VBQzlCWCxLQUFLQyxLQUFLLENBQUNYLGdCQUFnQkgsSUFBSSxDQUFDeUIsa0JBQWtCO2VBQ2pEdkMsS0FBSytCLE1BQU0sR0FBRztnQkFBQztvQkFDakJTLE1BQU07b0JBQ05DLFNBQVN6QyxLQUFLK0IsTUFBTTtnQkFDdEI7YUFBRSxHQUFHLEVBQUU7WUFDUDtnQkFDRVMsTUFBTTtnQkFDTkMsU0FBUztZQUNYO1NBQ0Q7UUFDREMsVUFBVWYsS0FBS1csU0FBUyxDQUFDO2VBQ3BCWCxLQUFLQyxLQUFLLENBQUNYLGdCQUFnQkgsSUFBSSxDQUFDNEIsUUFBUTtZQUMzQztnQkFDRVo7Z0JBQ0FhLE9BQU8zQyxLQUFLaUMsSUFBSTtnQkFDaEJXLEtBQUs1QyxLQUFLNkMsU0FBUztZQUNyQjtTQUNEO0lBQ0gsR0FDQ3pCLEVBQUUsQ0FBQyxNQUFNcEIsS0FBS3FCLE9BQU8sRUFDckJGLE1BQU0sQ0FBQyxvQ0FDUEcsTUFBTTtJQUVULElBQUljLGFBQWE7UUFDZixPQUFPLElBQUk1QixTQUFTLHlCQUF5QjtZQUFFQyxRQUFRO1FBQUk7SUFDN0Q7SUFFQSxPQUFPLElBQUlELFNBQVNtQixLQUFLVyxTQUFTLENBQUM7UUFDakNSO1FBQ0FZLFVBQVVmLEtBQUtDLEtBQUssQ0FBQ08sYUFBYU87UUFDbENILG9CQUFvQlosS0FBS0MsS0FBSyxDQUFDTyxhQUFhSTtJQUM5QyxJQUFJO1FBQUU5QixRQUFRO0lBQUk7QUFDcEIiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hY2JveGxpdS9wcm9qZWN0cy9iaWpvbi9lY2hvYWkvc2VydmljZXMvZGVzaWduZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVzaWduZXJTdGVwLCBzdGFydERlc2lnbmVyV29ya2Zsb3csIFN0ZXBCcmFuY2ggfSBmcm9tIFwiQC93b3JrZmxvdy9kZXNpZ25lclwiO1xuaW1wb3J0IHN1cGFiYXNlIGZyb20gXCIuL2xpYi9zdXBhYmFzZVwiO1xuaW1wb3J0IHsgQ2hhdENvbXBsZXRpb25NZXNzYWdlUGFyYW0gfSBmcm9tIFwib3BlbmFpL3Jlc291cmNlcy5tanNcIjtcbmltcG9ydCB7IERpc3BsYXllZE1lc3NhZ2UgfSBmcm9tIFwiLi9nZXQtY2hhdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIERlc2lnbmVyUmVxdWVzdEJvZHkge1xuICBjaGF0X2lkOiBzdHJpbmc7XG4gIHByb21wdDogc3RyaW5nXG4gIHJlZnM/OiBzdHJpbmdcbiAgc3RlcD86IHN0cmluZ1xuICBuZXh0X3N0ZXA/OiBzdHJpbmdcbiAgbW9kZWw/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXNpZ25lclJlc3BvbnNlIHtcbiAgc3RlcHM6IERlc2lnbmVyU3RlcFtdXG4gIGJyYW5jaGVzOiBTdGVwQnJhbmNoW11cbiAgZGlzcGxheWVkX21lc3NhZ2VzOiBEaXNwbGF5ZWRNZXNzYWdlW11cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlc2lnbmVyKGJvZHk6IERlc2lnbmVyUmVxdWVzdEJvZHksIGhlYWRlcnM6IEhlYWRlcnMpOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gIGNvbnN0IHRva2VuID0gaGVhZGVycy5nZXQoXCJBdXRob3JpemF0aW9uXCIpPy5zcGxpdChcIiBcIilbMV07XG4gIGlmICghdG9rZW4gJiYgcHJvY2Vzcy5lbnYuVU5BVVRIT1JJWkVEX01PREUgIT09IFwidHJ1ZVwiKSB7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShcIlVuYXV0aG9yaXplZFwiLCB7IHN0YXR1czogNDAxIH0pO1xuICB9XG4gIGNvbnN0IHVzZXJJZCA9XG4gICAgcHJvY2Vzcy5lbnYuVU5BVVRIT1JJWkVEX01PREUgPT09IFwidHJ1ZVwiXG4gICAgICA/IHByb2Nlc3MuZW52LlVOQVVUSE9SSVpFRF9NT0RFX1VTRVJfSURcbiAgICAgIDogKGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcih0b2tlbikpLmRhdGEudXNlcj8uaWQ7XG4gICAgICBcbiAgY29uc3QgZGVzaWduZXJDb250ZXh0ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgnY2hhdHMnKVxuICAgIC5zZWxlY3QoJ3VpZCwgaWQsIGRlc2lnbmVyX2NvbnRleHQsIGRpc3BsYXllZF9tZXNzYWdlcywgYnJhbmNoZXMnKVxuICAgIC5lcSgndWlkJywgdXNlcklkKVxuICAgIC5lcSgnaWQnLCBib2R5LmNoYXRfaWQpXG4gICAgLnNpbmdsZSgpO1xuICAgIFxuICBpZiAoZGVzaWduZXJDb250ZXh0LmVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZGVzaWduZXJDb250ZXh0LmVycm9yKVxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcIiwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxuICBjb25zdCBjb250ZXh0ID0gSlNPTi5wYXJzZShkZXNpZ25lckNvbnRleHQuZGF0YS5kZXNpZ25lcl9jb250ZXh0KSBhcyBDaGF0Q29tcGxldGlvbk1lc3NhZ2VQYXJhbVtdO1xuXG4gIGNvbnN0IHN0ZXBzID0gYXdhaXQgc3RhcnREZXNpZ25lcldvcmtmbG93KGNvbnRleHQsIHtcbiAgICBwcm9tcHQ6IGJvZHkucHJvbXB0LFxuICAgIHJlZnM6IGJvZHkucmVmcyxcbiAgICBzdGVwOiBib2R5LnN0ZXAsXG4gICAgbW9kZWw6IGJvZHkubW9kZWwsXG4gIH0pO1xuXG4gIGNvbnN0IHsgZGF0YTogdXBkYXRlZENoYXQsIGVycm9yOiB1cGRhdGVFcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbSgnY2hhdHMnKVxuICAgIC51cGRhdGUoe1xuICAgICAgZGVzaWduZXJfY29udGV4dDogSlNPTi5zdHJpbmdpZnkoY29udGV4dCksXG4gICAgICBkaXNwbGF5ZWRfbWVzc2FnZXM6IEpTT04uc3RyaW5naWZ5KFtcbiAgICAgICAgLi4uSlNPTi5wYXJzZShkZXNpZ25lckNvbnRleHQuZGF0YS5kaXNwbGF5ZWRfbWVzc2FnZXMpLFxuICAgICAgICAuLi4oYm9keS5wcm9tcHQgPyBbe1xuICAgICAgICAgIHJvbGU6ICd1c2VyJyxcbiAgICAgICAgICBjb250ZW50OiBib2R5LnByb21wdCxcbiAgICAgICAgfV0gOiBbXSksXG4gICAgICAgIHtcbiAgICAgICAgICByb2xlOiAncHJvY2Vzc29yJyxcbiAgICAgICAgICBjb250ZW50OiAnRGVzaWduZXInLFxuICAgICAgICB9XG4gICAgICBdKSxcbiAgICAgIGJyYW5jaGVzOiBKU09OLnN0cmluZ2lmeShbXG4gICAgICAgIC4uLkpTT04ucGFyc2UoZGVzaWduZXJDb250ZXh0LmRhdGEuYnJhbmNoZXMpLFxuICAgICAgICB7XG4gICAgICAgICAgc3RlcHMsXG4gICAgICAgICAgc3RhcnQ6IGJvZHkuc3RlcCxcbiAgICAgICAgICBlbmQ6IGJvZHkubmV4dF9zdGVwLFxuICAgICAgICB9XG4gICAgICBdKSxcbiAgICB9KVxuICAgIC5lcSgnaWQnLCBib2R5LmNoYXRfaWQpXG4gICAgLnNlbGVjdCgnZGlzcGxheWVkX21lc3NhZ2VzLCBicmFuY2hlcywgaWQnKVxuICAgIC5zaW5nbGUoKTtcblxuICBpZiAodXBkYXRlRXJyb3IpIHtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiSW50ZXJuYWwgU2VydmVyIEVycm9yXCIsIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHtcbiAgICBzdGVwcyxcbiAgICBicmFuY2hlczogSlNPTi5wYXJzZSh1cGRhdGVkQ2hhdD8uYnJhbmNoZXMpLFxuICAgIGRpc3BsYXllZF9tZXNzYWdlczogSlNPTi5wYXJzZSh1cGRhdGVkQ2hhdD8uZGlzcGxheWVkX21lc3NhZ2VzKSxcbiAgfSksIHsgc3RhdHVzOiAyMDAgfSk7XG59XG5cbiJdLCJuYW1lcyI6WyJzdGFydERlc2lnbmVyV29ya2Zsb3ciLCJzdXBhYmFzZSIsImRlc2lnbmVyIiwiYm9keSIsImhlYWRlcnMiLCJ0b2tlbiIsImdldCIsInNwbGl0IiwicHJvY2VzcyIsImVudiIsIlVOQVVUSE9SSVpFRF9NT0RFIiwiUmVzcG9uc2UiLCJzdGF0dXMiLCJ1c2VySWQiLCJVTkFVVEhPUklaRURfTU9ERV9VU0VSX0lEIiwiYXV0aCIsImdldFVzZXIiLCJkYXRhIiwidXNlciIsImlkIiwiZGVzaWduZXJDb250ZXh0IiwiZnJvbSIsInNlbGVjdCIsImVxIiwiY2hhdF9pZCIsInNpbmdsZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNvbnRleHQiLCJKU09OIiwicGFyc2UiLCJkZXNpZ25lcl9jb250ZXh0Iiwic3RlcHMiLCJwcm9tcHQiLCJyZWZzIiwic3RlcCIsIm1vZGVsIiwidXBkYXRlZENoYXQiLCJ1cGRhdGVFcnJvciIsInVwZGF0ZSIsInN0cmluZ2lmeSIsImRpc3BsYXllZF9tZXNzYWdlcyIsInJvbGUiLCJjb250ZW50IiwiYnJhbmNoZXMiLCJzdGFydCIsImVuZCIsIm5leHRfc3RlcCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./services/designer.ts\n");

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

/***/ "(rsc)/./workflow/designer/index.ts":
/*!************************************!*\
  !*** ./workflow/designer/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   startDesignerWorkflow: () => (/* binding */ startDesignerWorkflow)\n/* harmony export */ });\n/* harmony import */ var _prompts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prompts */ \"(rsc)/./workflow/designer/prompts.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ \"(rsc)/./utils/index.ts\");\n/* harmony import */ var _config_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/config/client */ \"(rsc)/./config/client.ts\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ \"(rsc)/./workflow/designer/types.ts\");\n\n\n\nconst provider = _config_client__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_PROVIDER;\nconst defaultModel = _config_client__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_DESIGNER_MODEL;\nasync function startDesignerWorkflow(context, options) {\n    const { prompt: userPrompt, refs, step, model: modelOption } = options;\n    const model = modelOption ?? defaultModel;\n    // Workflow Start\n    if (context.length === 0) {\n        context.push({\n            role: 'system',\n            content: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.prompt)(_prompts__WEBPACK_IMPORTED_MODULE_0__.SYSTEM) + (refs ? (0,_utils__WEBPACK_IMPORTED_MODULE_1__.prompt)(_prompts__WEBPACK_IMPORTED_MODULE_0__.SYSTEM_ADDITION, {\n                refs: refs\n            }) : '')\n        }, {\n            role: 'user',\n            content: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.prompt)(_prompts__WEBPACK_IMPORTED_MODULE_0__.USER, {\n                prompt: userPrompt\n            })\n        });\n    } else if (context[context.length - 1].role !== 'user') {\n        context.push({\n            role: 'user',\n            content: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.prompt)(_prompts__WEBPACK_IMPORTED_MODULE_0__.ADDITION, {\n                step: step,\n                prompt: userPrompt\n            })\n        });\n    }\n    const response = await provider.chat.completions.create({\n        model,\n        messages: context\n    });\n    context.push(response.choices[0].message);\n    const { content } = response.choices[0].message;\n    console.log(content);\n    return JSON.parse(content?.match(/```json\\n([\\s\\S]*)\\n```/)?.[1] ?? '');\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi93b3JrZmxvdy9kZXNpZ25lci9pbmRleC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNtRTtBQUNsQztBQUMwQztBQUczRSxNQUFNTyxXQUFXRCw0REFBZ0JBO0FBQ2pDLE1BQU1FLGVBQWVILGtFQUFzQkE7QUFTcEMsZUFBZUksc0JBQ3BCQyxPQUFxQyxFQUNyQ0MsT0FBZ0M7SUFFaEMsTUFBTSxFQUFFUCxRQUFRUSxVQUFVLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxPQUFPQyxXQUFXLEVBQUUsR0FBR0w7SUFDL0QsTUFBTUksUUFBUUMsZUFBZVI7SUFFN0IsaUJBQWlCO0lBQ2pCLElBQUlFLFFBQVFPLE1BQU0sS0FBSyxHQUFHO1FBQ3hCUCxRQUFRUSxJQUFJLENBQ1Y7WUFDRUMsTUFBTTtZQUNOQyxTQUFTaEIsOENBQU1BLENBQUNKLDRDQUFNQSxJQUFLYSxDQUFBQSxPQUFPVCw4Q0FBTUEsQ0FBQ0YscURBQWVBLEVBQUU7Z0JBQUVXLE1BQU1BO1lBQU0sS0FBSyxFQUFDO1FBQ2hGLEdBQ0E7WUFDRU0sTUFBTTtZQUNOQyxTQUFTaEIsOENBQU1BLENBQUNILDBDQUFJQSxFQUFFO2dCQUFFRyxRQUFRUTtZQUFXO1FBQzdDO0lBRUosT0FBTyxJQUFJRixPQUFPLENBQUNBLFFBQVFPLE1BQU0sR0FBRyxFQUFFLENBQUNFLElBQUksS0FBSyxRQUFRO1FBQ3REVCxRQUFRUSxJQUFJLENBQUM7WUFDWEMsTUFBTTtZQUNOQyxTQUFTaEIsOENBQU1BLENBQUNELDhDQUFRQSxFQUFFO2dCQUFFVyxNQUFNQTtnQkFBT1YsUUFBUVE7WUFBVztRQUM5RDtJQUNGO0lBRUEsTUFBTVMsV0FBVyxNQUFNZCxTQUFTZSxJQUFJLENBQUNDLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDO1FBQ3REVDtRQUNBVSxVQUFVZjtJQUNaO0lBRUFBLFFBQVFRLElBQUksQ0FBQ0csU0FBU0ssT0FBTyxDQUFDLEVBQUUsQ0FBQ0MsT0FBTztJQUV4QyxNQUFNLEVBQUVQLE9BQU8sRUFBRSxHQUFHQyxTQUFTSyxPQUFPLENBQUMsRUFBRSxDQUFDQyxPQUFPO0lBQy9DQyxRQUFRQyxHQUFHLENBQUNUO0lBQ1osT0FBT1UsS0FBS0MsS0FBSyxDQUFDWCxTQUFTWSxNQUFNLDRCQUE0QixDQUFDLEVBQUUsSUFBSTtBQUN0RTtBQUV1QiIsInNvdXJjZXMiOlsiL1VzZXJzL2FjYm94bGl1L3Byb2plY3RzL2Jpam9uL2VjaG9haS93b3JrZmxvdy9kZXNpZ25lci9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGF0Q29tcGxldGlvbk1lc3NhZ2VQYXJhbSB9IGZyb20gXCJvcGVuYWkvcmVzb3VyY2VzL2NoYXQvY29tcGxldGlvbnNcIlxuaW1wb3J0IHsgU1lTVEVNLCBVU0VSLCBTWVNURU1fQURESVRJT04sIEFERElUSU9OIH0gZnJvbSBcIi4vcHJvbXB0c1wiXG5pbXBvcnQgeyBwcm9tcHQgfSBmcm9tIFwiQC91dGlsc1wiO1xuaW1wb3J0IHsgREVGQVVMVF9ERVNJR05FUl9NT0RFTCwgREVGQVVMVF9QUk9WSURFUiB9IGZyb20gXCJAL2NvbmZpZy9jbGllbnRcIjtcbmltcG9ydCB7IERlc2lnbmVyU3RlcCB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IHByb3ZpZGVyID0gREVGQVVMVF9QUk9WSURFUlxuY29uc3QgZGVmYXVsdE1vZGVsID0gREVGQVVMVF9ERVNJR05FUl9NT0RFTFxuXG5leHBvcnQgaW50ZXJmYWNlIERlc2lnbmVyV29ya2Zsb3dPcHRpb25zIHtcbiAgcHJvbXB0OiBzdHJpbmdcbiAgcmVmcz86IHN0cmluZ1xuICBzdGVwPzogc3RyaW5nXG4gIG1vZGVsPzogc3RyaW5nXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdGFydERlc2lnbmVyV29ya2Zsb3coXG4gIGNvbnRleHQ6IENoYXRDb21wbGV0aW9uTWVzc2FnZVBhcmFtW10sXG4gIG9wdGlvbnM6IERlc2lnbmVyV29ya2Zsb3dPcHRpb25zLFxuKSB7XG4gIGNvbnN0IHsgcHJvbXB0OiB1c2VyUHJvbXB0LCByZWZzLCBzdGVwLCBtb2RlbDogbW9kZWxPcHRpb24gfSA9IG9wdGlvbnM7XG4gIGNvbnN0IG1vZGVsID0gbW9kZWxPcHRpb24gPz8gZGVmYXVsdE1vZGVsXG5cbiAgLy8gV29ya2Zsb3cgU3RhcnRcbiAgaWYgKGNvbnRleHQubGVuZ3RoID09PSAwKSB7XG4gICAgY29udGV4dC5wdXNoKFxuICAgICAge1xuICAgICAgICByb2xlOiAnc3lzdGVtJyxcbiAgICAgICAgY29udGVudDogcHJvbXB0KFNZU1RFTSkgKyAocmVmcyA/IHByb21wdChTWVNURU1fQURESVRJT04sIHsgcmVmczogcmVmcyEgfSkgOiAnJyksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICByb2xlOiAndXNlcicsXG4gICAgICAgIGNvbnRlbnQ6IHByb21wdChVU0VSLCB7IHByb21wdDogdXNlclByb21wdCB9KSxcbiAgICAgIH1cbiAgICApXG4gIH0gZWxzZSBpZiAoY29udGV4dFtjb250ZXh0Lmxlbmd0aCAtIDFdLnJvbGUgIT09ICd1c2VyJykge1xuICAgIGNvbnRleHQucHVzaCh7XG4gICAgICByb2xlOiAndXNlcicsXG4gICAgICBjb250ZW50OiBwcm9tcHQoQURESVRJT04sIHsgc3RlcDogc3RlcCEsIHByb21wdDogdXNlclByb21wdCB9KSxcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwcm92aWRlci5jaGF0LmNvbXBsZXRpb25zLmNyZWF0ZSh7XG4gICAgbW9kZWwsXG4gICAgbWVzc2FnZXM6IGNvbnRleHQsXG4gIH0pXG5cbiAgY29udGV4dC5wdXNoKHJlc3BvbnNlLmNob2ljZXNbMF0ubWVzc2FnZSlcblxuICBjb25zdCB7IGNvbnRlbnQgfSA9IHJlc3BvbnNlLmNob2ljZXNbMF0ubWVzc2FnZVxuICBjb25zb2xlLmxvZyhjb250ZW50KVxuICByZXR1cm4gSlNPTi5wYXJzZShjb250ZW50Py5tYXRjaCgvYGBganNvblxcbihbXFxzXFxTXSopXFxuYGBgLyk/LlsxXSA/PyAnJykgYXMgRGVzaWduZXJTdGVwW11cbn1cblxuZXhwb3J0ICogZnJvbSAnLi90eXBlcydcbiJdLCJuYW1lcyI6WyJTWVNURU0iLCJVU0VSIiwiU1lTVEVNX0FERElUSU9OIiwiQURESVRJT04iLCJwcm9tcHQiLCJERUZBVUxUX0RFU0lHTkVSX01PREVMIiwiREVGQVVMVF9QUk9WSURFUiIsInByb3ZpZGVyIiwiZGVmYXVsdE1vZGVsIiwic3RhcnREZXNpZ25lcldvcmtmbG93IiwiY29udGV4dCIsIm9wdGlvbnMiLCJ1c2VyUHJvbXB0IiwicmVmcyIsInN0ZXAiLCJtb2RlbCIsIm1vZGVsT3B0aW9uIiwibGVuZ3RoIiwicHVzaCIsInJvbGUiLCJjb250ZW50IiwicmVzcG9uc2UiLCJjaGF0IiwiY29tcGxldGlvbnMiLCJjcmVhdGUiLCJtZXNzYWdlcyIsImNob2ljZXMiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJwYXJzZSIsIm1hdGNoIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./workflow/designer/index.ts\n");

/***/ }),

/***/ "(rsc)/./workflow/designer/prompts.ts":
/*!**************************************!*\
  !*** ./workflow/designer/prompts.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ADDITION: () => (/* binding */ ADDITION),\n/* harmony export */   SYSTEM: () => (/* binding */ SYSTEM),\n/* harmony export */   SYSTEM_ADDITION: () => (/* binding */ SYSTEM_ADDITION),\n/* harmony export */   USER: () => (/* binding */ USER)\n/* harmony export */ });\nconst SYSTEM = `\nYou are a lesson designer specialized in breaking down complex concepts into clear, logical steps. Your task is to create a step-by-step lesson plan that guides students from basic understanding to mastery of the given topic.\n\nFor each question provided by the user, design a detailed teaching sequence where each step builds upon previous knowledge. Your steps should be progressive, starting from the most fundamental concepts and gradually advancing to more complex ideas.\n\nFor example, when teaching trigonometry to beginners:\n1. First introduce the right triangle and its basic components\n2. Then explain one concept (like sine) using this foundation\n3. Build upon this understanding for subsequent concepts\n4. Connect these concepts together\n\nEach step in your lesson plan must include:\n- A sequential step number\n- A clear problem-solving process or concept introduction\n- The essential knowledge points needed for this step\n- Detailed guidance on how teachers should explain this content\n- A concrete conclusion or key takeaway from this step\n\nThe output must be a JSON array following this JSON schema:\n\n\\`\\`\\`json\n{\n  \"type\": \"array\",\n  \"items\": {\n    \"type\": \"object\",\n    \"properties\": {\n      \"step\": {\n        \"type\": \"number\",\n        \"description\": \"The step number of the lesson\"\n      },\n      \"problem\": {\n        \"type\": \"string\",\n        \"description\": \"What specific concept or problem this step addresses\"\n      },\n      \"knowledge\": {\n        \"type\": \"string\",\n        \"description\": \"The fundamental knowledge points needed for this step\"\n      },\n      \"explanation\": {\n        \"type\": \"string\",\n        \"description\": \"Detailed guidance for teachers on how to present and explain this content\"\n      },\n      \"conclusion\": {\n        \"type\": \"string\",\n        \"description\": \"The key learning outcome or solution for this step\"\n      }\n    }\n  }\n}\n\\`\\`\\`\n\nNotice: this is JSON schema, not the final output reference.\n\nRemember to:\n- Start with the most basic concepts\n- Build each step on previous knowledge\n- Use clear, age-appropriate explanations\n- Include visual or practical examples when helpful\n- Ensure each step has a clear learning outcome\n`.trim();\nconst USER = `\nPlease design implementation steps based on the following user description:\n\n\\`\\`\\`markdown\n<:insert:prompt>\n\\`\\`\\`\n\nRequirements:\n1. Return the response as a pure JSON object\n2. Do not include any markdown code blocks or additional text\n3. Break down the implementation into clear, sequential steps\n4. Each step should be specific and actionable\n`.trim();\nconst SYSTEM_ADDITION = `\nAnd I find some extra information you need to use:\n\n\\`\\`\\`markdown\n<:insert:refs>\n\\`\\`\\`\n`.trim();\nconst ADDITION = `\nGiven that the user has a question at step <:insert:step>, design additional sub-steps to address this new question while building upon the previous step designs.\n\nUser's question:\n\\`\\`\\`markdown\n<:insert:prompt>\n\\`\\`\\`\n\nRequirements:\n1. Output the response as pure JSON data without markdown code blocks or additional text\n2. Ensure step names are unique and follow a hierarchical naming pattern:\n   - For questions about step N, use step numbers like \"N.1\", \"N.2\", etc.\n   - Example: If user asks about step 1, create steps like \"1.1\", \"1.2\", etc.\n3. Each new step should directly relate to and elaborate on the step being questioned\n`.trim();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi93b3JrZmxvdy9kZXNpZ25lci9wcm9tcHRzLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxNQUFNQSxTQUFTLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkR2QixDQUFDLENBQUNDLElBQUksR0FBRTtBQUVELE1BQU1DLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7O0FBWXJCLENBQUMsQ0FBQ0QsSUFBSSxHQUFFO0FBRUQsTUFBTUUsa0JBQWtCLENBQUM7Ozs7OztBQU1oQyxDQUFDLENBQUNGLElBQUksR0FBRTtBQUVELE1BQU1HLFdBQVcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFjekIsQ0FBQyxDQUFDSCxJQUFJLEdBQUUiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hY2JveGxpdS9wcm9qZWN0cy9iaWpvbi9lY2hvYWkvd29ya2Zsb3cvZGVzaWduZXIvcHJvbXB0cy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgU1lTVEVNID0gYFxuWW91IGFyZSBhIGxlc3NvbiBkZXNpZ25lciBzcGVjaWFsaXplZCBpbiBicmVha2luZyBkb3duIGNvbXBsZXggY29uY2VwdHMgaW50byBjbGVhciwgbG9naWNhbCBzdGVwcy4gWW91ciB0YXNrIGlzIHRvIGNyZWF0ZSBhIHN0ZXAtYnktc3RlcCBsZXNzb24gcGxhbiB0aGF0IGd1aWRlcyBzdHVkZW50cyBmcm9tIGJhc2ljIHVuZGVyc3RhbmRpbmcgdG8gbWFzdGVyeSBvZiB0aGUgZ2l2ZW4gdG9waWMuXG5cbkZvciBlYWNoIHF1ZXN0aW9uIHByb3ZpZGVkIGJ5IHRoZSB1c2VyLCBkZXNpZ24gYSBkZXRhaWxlZCB0ZWFjaGluZyBzZXF1ZW5jZSB3aGVyZSBlYWNoIHN0ZXAgYnVpbGRzIHVwb24gcHJldmlvdXMga25vd2xlZGdlLiBZb3VyIHN0ZXBzIHNob3VsZCBiZSBwcm9ncmVzc2l2ZSwgc3RhcnRpbmcgZnJvbSB0aGUgbW9zdCBmdW5kYW1lbnRhbCBjb25jZXB0cyBhbmQgZ3JhZHVhbGx5IGFkdmFuY2luZyB0byBtb3JlIGNvbXBsZXggaWRlYXMuXG5cbkZvciBleGFtcGxlLCB3aGVuIHRlYWNoaW5nIHRyaWdvbm9tZXRyeSB0byBiZWdpbm5lcnM6XG4xLiBGaXJzdCBpbnRyb2R1Y2UgdGhlIHJpZ2h0IHRyaWFuZ2xlIGFuZCBpdHMgYmFzaWMgY29tcG9uZW50c1xuMi4gVGhlbiBleHBsYWluIG9uZSBjb25jZXB0IChsaWtlIHNpbmUpIHVzaW5nIHRoaXMgZm91bmRhdGlvblxuMy4gQnVpbGQgdXBvbiB0aGlzIHVuZGVyc3RhbmRpbmcgZm9yIHN1YnNlcXVlbnQgY29uY2VwdHNcbjQuIENvbm5lY3QgdGhlc2UgY29uY2VwdHMgdG9nZXRoZXJcblxuRWFjaCBzdGVwIGluIHlvdXIgbGVzc29uIHBsYW4gbXVzdCBpbmNsdWRlOlxuLSBBIHNlcXVlbnRpYWwgc3RlcCBudW1iZXJcbi0gQSBjbGVhciBwcm9ibGVtLXNvbHZpbmcgcHJvY2VzcyBvciBjb25jZXB0IGludHJvZHVjdGlvblxuLSBUaGUgZXNzZW50aWFsIGtub3dsZWRnZSBwb2ludHMgbmVlZGVkIGZvciB0aGlzIHN0ZXBcbi0gRGV0YWlsZWQgZ3VpZGFuY2Ugb24gaG93IHRlYWNoZXJzIHNob3VsZCBleHBsYWluIHRoaXMgY29udGVudFxuLSBBIGNvbmNyZXRlIGNvbmNsdXNpb24gb3Iga2V5IHRha2Vhd2F5IGZyb20gdGhpcyBzdGVwXG5cblRoZSBvdXRwdXQgbXVzdCBiZSBhIEpTT04gYXJyYXkgZm9sbG93aW5nIHRoaXMgSlNPTiBzY2hlbWE6XG5cblxcYFxcYFxcYGpzb25cbntcbiAgXCJ0eXBlXCI6IFwiYXJyYXlcIixcbiAgXCJpdGVtc1wiOiB7XG4gICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgIFwic3RlcFwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGhlIHN0ZXAgbnVtYmVyIG9mIHRoZSBsZXNzb25cIlxuICAgICAgfSxcbiAgICAgIFwicHJvYmxlbVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiV2hhdCBzcGVjaWZpYyBjb25jZXB0IG9yIHByb2JsZW0gdGhpcyBzdGVwIGFkZHJlc3Nlc1wiXG4gICAgICB9LFxuICAgICAgXCJrbm93bGVkZ2VcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSBmdW5kYW1lbnRhbCBrbm93bGVkZ2UgcG9pbnRzIG5lZWRlZCBmb3IgdGhpcyBzdGVwXCJcbiAgICAgIH0sXG4gICAgICBcImV4cGxhbmF0aW9uXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJEZXRhaWxlZCBndWlkYW5jZSBmb3IgdGVhY2hlcnMgb24gaG93IHRvIHByZXNlbnQgYW5kIGV4cGxhaW4gdGhpcyBjb250ZW50XCJcbiAgICAgIH0sXG4gICAgICBcImNvbmNsdXNpb25cIjoge1xuICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSBrZXkgbGVhcm5pbmcgb3V0Y29tZSBvciBzb2x1dGlvbiBmb3IgdGhpcyBzdGVwXCJcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxcYFxcYFxcYFxuXG5Ob3RpY2U6IHRoaXMgaXMgSlNPTiBzY2hlbWEsIG5vdCB0aGUgZmluYWwgb3V0cHV0IHJlZmVyZW5jZS5cblxuUmVtZW1iZXIgdG86XG4tIFN0YXJ0IHdpdGggdGhlIG1vc3QgYmFzaWMgY29uY2VwdHNcbi0gQnVpbGQgZWFjaCBzdGVwIG9uIHByZXZpb3VzIGtub3dsZWRnZVxuLSBVc2UgY2xlYXIsIGFnZS1hcHByb3ByaWF0ZSBleHBsYW5hdGlvbnNcbi0gSW5jbHVkZSB2aXN1YWwgb3IgcHJhY3RpY2FsIGV4YW1wbGVzIHdoZW4gaGVscGZ1bFxuLSBFbnN1cmUgZWFjaCBzdGVwIGhhcyBhIGNsZWFyIGxlYXJuaW5nIG91dGNvbWVcbmAudHJpbSgpXG5cbmV4cG9ydCBjb25zdCBVU0VSID0gYFxuUGxlYXNlIGRlc2lnbiBpbXBsZW1lbnRhdGlvbiBzdGVwcyBiYXNlZCBvbiB0aGUgZm9sbG93aW5nIHVzZXIgZGVzY3JpcHRpb246XG5cblxcYFxcYFxcYG1hcmtkb3duXG48Omluc2VydDpwcm9tcHQ+XG5cXGBcXGBcXGBcblxuUmVxdWlyZW1lbnRzOlxuMS4gUmV0dXJuIHRoZSByZXNwb25zZSBhcyBhIHB1cmUgSlNPTiBvYmplY3RcbjIuIERvIG5vdCBpbmNsdWRlIGFueSBtYXJrZG93biBjb2RlIGJsb2NrcyBvciBhZGRpdGlvbmFsIHRleHRcbjMuIEJyZWFrIGRvd24gdGhlIGltcGxlbWVudGF0aW9uIGludG8gY2xlYXIsIHNlcXVlbnRpYWwgc3RlcHNcbjQuIEVhY2ggc3RlcCBzaG91bGQgYmUgc3BlY2lmaWMgYW5kIGFjdGlvbmFibGVcbmAudHJpbSgpXG5cbmV4cG9ydCBjb25zdCBTWVNURU1fQURESVRJT04gPSBgXG5BbmQgSSBmaW5kIHNvbWUgZXh0cmEgaW5mb3JtYXRpb24geW91IG5lZWQgdG8gdXNlOlxuXG5cXGBcXGBcXGBtYXJrZG93blxuPDppbnNlcnQ6cmVmcz5cblxcYFxcYFxcYFxuYC50cmltKClcblxuZXhwb3J0IGNvbnN0IEFERElUSU9OID0gYFxuR2l2ZW4gdGhhdCB0aGUgdXNlciBoYXMgYSBxdWVzdGlvbiBhdCBzdGVwIDw6aW5zZXJ0OnN0ZXA+LCBkZXNpZ24gYWRkaXRpb25hbCBzdWItc3RlcHMgdG8gYWRkcmVzcyB0aGlzIG5ldyBxdWVzdGlvbiB3aGlsZSBidWlsZGluZyB1cG9uIHRoZSBwcmV2aW91cyBzdGVwIGRlc2lnbnMuXG5cblVzZXIncyBxdWVzdGlvbjpcblxcYFxcYFxcYG1hcmtkb3duXG48Omluc2VydDpwcm9tcHQ+XG5cXGBcXGBcXGBcblxuUmVxdWlyZW1lbnRzOlxuMS4gT3V0cHV0IHRoZSByZXNwb25zZSBhcyBwdXJlIEpTT04gZGF0YSB3aXRob3V0IG1hcmtkb3duIGNvZGUgYmxvY2tzIG9yIGFkZGl0aW9uYWwgdGV4dFxuMi4gRW5zdXJlIHN0ZXAgbmFtZXMgYXJlIHVuaXF1ZSBhbmQgZm9sbG93IGEgaGllcmFyY2hpY2FsIG5hbWluZyBwYXR0ZXJuOlxuICAgLSBGb3IgcXVlc3Rpb25zIGFib3V0IHN0ZXAgTiwgdXNlIHN0ZXAgbnVtYmVycyBsaWtlIFwiTi4xXCIsIFwiTi4yXCIsIGV0Yy5cbiAgIC0gRXhhbXBsZTogSWYgdXNlciBhc2tzIGFib3V0IHN0ZXAgMSwgY3JlYXRlIHN0ZXBzIGxpa2UgXCIxLjFcIiwgXCIxLjJcIiwgZXRjLlxuMy4gRWFjaCBuZXcgc3RlcCBzaG91bGQgZGlyZWN0bHkgcmVsYXRlIHRvIGFuZCBlbGFib3JhdGUgb24gdGhlIHN0ZXAgYmVpbmcgcXVlc3Rpb25lZFxuYC50cmltKClcbiJdLCJuYW1lcyI6WyJTWVNURU0iLCJ0cmltIiwiVVNFUiIsIlNZU1RFTV9BRERJVElPTiIsIkFERElUSU9OIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./workflow/designer/prompts.ts\n");

/***/ }),

/***/ "(rsc)/./workflow/designer/types.ts":
/*!************************************!*\
  !*** ./workflow/designer/types.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi93b3JrZmxvdy9kZXNpZ25lci90eXBlcy50cyIsIm1hcHBpbmdzIjoiO0FBWUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hY2JveGxpdS9wcm9qZWN0cy9iaWpvbi9lY2hvYWkvd29ya2Zsb3cvZGVzaWduZXIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBEZXNpZ25lclN0ZXAge1xuICBzdGVwOiBzdHJpbmdcbiAgcHJvYmxlbTogc3RyaW5nXG4gIGtub3dsZWRnZTogc3RyaW5nXG4gIGV4cGxhbmF0aW9uOiBzdHJpbmdcbiAgY29uY2x1c2lvbjogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RlcEJyYW5jaCB7XG4gIHN0ZXBzOiBEZXNpZ25lclN0ZXBbXVxuICBzdGFydD86IHN0cmluZ1xuICBlbmQ/OiBzdHJpbmdcbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./workflow/designer/types.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0","vendor-chunks/tr46@0.0.3","vendor-chunks/@supabase+auth-js@2.69.1","vendor-chunks/@supabase+realtime-js@2.11.2","vendor-chunks/@supabase+postgrest-js@1.19.2","vendor-chunks/@supabase+node-fetch@2.6.15","vendor-chunks/whatwg-url@5.0.0","vendor-chunks/@supabase+storage-js@2.7.1","vendor-chunks/@supabase+supabase-js@2.49.3","vendor-chunks/@supabase+functions-js@2.4.4","vendor-chunks/webidl-conversions@3.0.1","vendor-chunks/formdata-node@4.4.1","vendor-chunks/openai@4.90.0_ws@8.18.1","vendor-chunks/web-streams-polyfill@4.0.0-beta.3","vendor-chunks/node-fetch@2.7.0","vendor-chunks/event-target-shim@5.0.1","vendor-chunks/agentkeepalive@4.6.0","vendor-chunks/form-data-encoder@1.7.2","vendor-chunks/abort-controller@3.0.0","vendor-chunks/ms@2.1.3","vendor-chunks/humanize-ms@1.2.1"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdesigner%2Froute&page=%2Fapi%2Fdesigner%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdesigner%2Froute.ts&appDir=%2FUsers%2Facboxliu%2Fprojects%2Fbijon%2Fechoai%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Facboxliu%2Fprojects%2Fbijon%2Fechoai&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();