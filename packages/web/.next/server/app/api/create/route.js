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
exports.id = "app/api/create/route";
exports.ids = ["app/api/create/route"];
exports.modules = {

/***/ "(rsc)/./app/api/create/route.ts":
/*!*********************************!*\
  !*** ./app/api/create/route.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _services_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/create */ \"(rsc)/./services/create.ts\");\n\nconst runtime = 'edge';\nasync function POST(request) {\n    const body = await request.json();\n    return await (0,_services_create__WEBPACK_IMPORTED_MODULE_0__.create)(body, request.headers);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NyZWF0ZS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUEyQztBQUUzQyxNQUFNQyxVQUFVO0FBRVQsZUFBZUMsS0FBS0MsT0FBZ0I7SUFDekMsTUFBTUMsT0FBTyxNQUFNRCxRQUFRRSxJQUFJO0lBQy9CLE9BQU8sTUFBTUwsd0RBQU1BLENBQUNJLE1BQU1ELFFBQVFHLE9BQU87QUFDM0MiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hY2JveGxpdS9wcm9qZWN0cy9iaWpvbi9lY2hvYWkvYXBwL2FwaS9jcmVhdGUvcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSBcIkAvc2VydmljZXMvY3JlYXRlXCI7XG5cbmNvbnN0IHJ1bnRpbWUgPSAnZWRnZSdcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCBib2R5ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gIHJldHVybiBhd2FpdCBjcmVhdGUoYm9keSwgcmVxdWVzdC5oZWFkZXJzKTtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGUiLCJydW50aW1lIiwiUE9TVCIsInJlcXVlc3QiLCJib2R5IiwianNvbiIsImhlYWRlcnMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/create/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcreate%2Froute&page=%2Fapi%2Fcreate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcreate%2Froute.ts&appDir=%2FUsers%2Facboxliu%2Fprojects%2Fbijon%2Fechoai%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Facboxliu%2Fprojects%2Fbijon%2Fechoai&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcreate%2Froute&page=%2Fapi%2Fcreate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcreate%2Froute.ts&appDir=%2FUsers%2Facboxliu%2Fprojects%2Fbijon%2Fechoai%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Facboxliu%2Fprojects%2Fbijon%2Fechoai&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/.pnpm/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/.pnpm/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_acboxliu_projects_bijon_echoai_app_api_create_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/create/route.ts */ \"(rsc)/./app/api/create/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/create/route\",\n        pathname: \"/api/create\",\n        filename: \"route\",\n        bundlePath: \"app/api/create/route\"\n    },\n    resolvedPagePath: \"/Users/acboxliu/projects/bijon/echoai/app/api/create/route.ts\",\n    nextConfigOutput,\n    userland: _Users_acboxliu_projects_bijon_echoai_app_api_create_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxNS4yLjJfcmVhY3QtZG9tQDE5LjAuMF9yZWFjdEAxOS4wLjBfX3JlYWN0QDE5LjAuMC9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZjcmVhdGUlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmNyZWF0ZSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmNyZWF0ZSUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmFjYm94bGl1JTJGcHJvamVjdHMlMkZiaWpvbiUyRmVjaG9haSUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZhY2JveGxpdSUyRnByb2plY3RzJTJGYmlqb24lMkZlY2hvYWkmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2E7QUFDMUY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9hY2JveGxpdS9wcm9qZWN0cy9iaWpvbi9lY2hvYWkvYXBwL2FwaS9jcmVhdGUvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2NyZWF0ZS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2NyZWF0ZVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvY3JlYXRlL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2FjYm94bGl1L3Byb2plY3RzL2Jpam9uL2VjaG9haS9hcHAvYXBpL2NyZWF0ZS9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcreate%2Froute&page=%2Fapi%2Fcreate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcreate%2Froute.ts&appDir=%2FUsers%2Facboxliu%2Fprojects%2Fbijon%2Fechoai%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Facboxliu%2Fprojects%2Fbijon%2Fechoai&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \*********************************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./services/create.ts":
/*!****************************!*\
  !*** ./services/create.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   create: () => (/* binding */ create)\n/* harmony export */ });\n/* harmony import */ var _lib_supabase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/supabase */ \"(rsc)/./services/lib/supabase.ts\");\n/* harmony import */ var _workflow_designer_prompts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/workflow/designer/prompts */ \"(rsc)/./workflow/designer/prompts.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils */ \"(rsc)/./utils/index.ts\");\n\n\n\nasync function create(body, headers) {\n    const token = headers.get(\"Authorization\")?.split(\" \")[1];\n    console.log(process.env.UNAUTHORIZED_MODE);\n    if (!token && process.env.UNAUTHORIZED_MODE !== \"true\") {\n        return new Response(\"Unauthorized\", {\n            status: 401\n        });\n    }\n    const userId = process.env.UNAUTHORIZED_MODE === \"true\" ? process.env.UNAUTHORIZED_MODE_USER_ID : (await _lib_supabase__WEBPACK_IMPORTED_MODULE_0__[\"default\"].auth.getUser(token)).data.user?.id;\n    const { data, error } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_0__[\"default\"].from(\"chats\").insert({\n        uid: userId,\n        designer_context: JSON.stringify([\n            {\n                role: \"system\",\n                content: _workflow_designer_prompts__WEBPACK_IMPORTED_MODULE_1__.SYSTEM\n            },\n            body.prompt ? {\n                role: \"user\",\n                content: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.prompt)(_workflow_designer_prompts__WEBPACK_IMPORTED_MODULE_1__.USER, {\n                    prompt: body.prompt\n                })\n            } : void 0\n        ]),\n        displayed_messages: JSON.stringify([\n            {\n                role: 'user',\n                content: body.prompt\n            }\n        ])\n    }).select(\"uid, id\").single();\n    if (error) {\n        console.log(error);\n        return new Response(\"Internal Server Error: \" + error.message, {\n            status: 500\n        });\n    }\n    return new Response(JSON.stringify({\n        chat_id: data.id\n    }), {\n        status: 200,\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zZXJ2aWNlcy9jcmVhdGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFzQztBQUNxQjtBQUMxQjtBQVUxQixlQUFlSSxPQUNwQkMsSUFBdUIsRUFDdkJDLE9BQWdCO0lBRWhCLE1BQU1DLFFBQVFELFFBQVFFLEdBQUcsQ0FBQyxrQkFBa0JDLE1BQU0sSUFBSSxDQUFDLEVBQUU7SUFDekRDLFFBQVFDLEdBQUcsQ0FBQ0MsUUFBUUMsR0FBRyxDQUFDQyxpQkFBaUI7SUFDekMsSUFBSSxDQUFDUCxTQUFTSyxRQUFRQyxHQUFHLENBQUNDLGlCQUFpQixLQUFLLFFBQVE7UUFDdEQsT0FBTyxJQUFJQyxTQUFTLGdCQUFnQjtZQUFFQyxRQUFRO1FBQUk7SUFDcEQ7SUFDQSxNQUFNQyxTQUNKTCxRQUFRQyxHQUFHLENBQUNDLGlCQUFpQixLQUFLLFNBQzlCRixRQUFRQyxHQUFHLENBQUNLLHlCQUF5QixHQUNyQyxDQUFDLE1BQU1sQixxREFBUUEsQ0FBQ21CLElBQUksQ0FBQ0MsT0FBTyxDQUFDYixNQUFLLEVBQUdjLElBQUksQ0FBQ0MsSUFBSSxFQUFFQztJQUV0RCxNQUFNLEVBQUVGLElBQUksRUFBRUcsS0FBSyxFQUFFLEdBQUcsTUFBTXhCLHFEQUFRQSxDQUNuQ3lCLElBQUksQ0FBQyxTQUNMQyxNQUFNLENBQUM7UUFDTkMsS0FBS1Y7UUFDTFcsa0JBQWtCQyxLQUFLQyxTQUFTLENBQUM7WUFDL0I7Z0JBQ0VDLE1BQU07Z0JBQ05DLFNBQVMvQiw4REFBTUE7WUFDakI7WUFDQUksS0FBS0YsTUFBTSxHQUNQO2dCQUNBNEIsTUFBTTtnQkFDTkMsU0FBUzdCLDhDQUFNQSxDQUFDRCw0REFBSUEsRUFBRTtvQkFDcEJDLFFBQVFFLEtBQUtGLE1BQU07Z0JBQ3JCO1lBQ0YsSUFDRSxLQUFLO1NBQ1Y7UUFDRDhCLG9CQUFvQkosS0FBS0MsU0FBUyxDQUFDO1lBQ2pDO2dCQUNFQyxNQUFNO2dCQUNOQyxTQUFTM0IsS0FBS0YsTUFBTTtZQUN0QjtTQUNEO0lBQ0gsR0FDQytCLE1BQU0sQ0FBQyxXQUNQQyxNQUFNO0lBRVQsSUFBSVgsT0FBTztRQUNUZCxRQUFRQyxHQUFHLENBQUNhO1FBQ1osT0FBTyxJQUFJVCxTQUFTLDRCQUE0QlMsTUFBTVksT0FBTyxFQUFFO1lBQUVwQixRQUFRO1FBQUk7SUFDL0U7SUFFQSxPQUFPLElBQUlELFNBQ1RjLEtBQUtDLFNBQVMsQ0FBQztRQUNiTyxTQUFTaEIsS0FBS0UsRUFBRTtJQUNsQixJQUNBO1FBQ0VQLFFBQVE7UUFDUlYsU0FBUztZQUNQLGdCQUFnQjtRQUNsQjtJQUNGO0FBRUoiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hY2JveGxpdS9wcm9qZWN0cy9iaWpvbi9lY2hvYWkvc2VydmljZXMvY3JlYXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdXBhYmFzZSBmcm9tIFwiLi9saWIvc3VwYWJhc2VcIjtcbmltcG9ydCB7IFNZU1RFTSwgVVNFUiB9IGZyb20gXCJAL3dvcmtmbG93L2Rlc2lnbmVyL3Byb21wdHNcIjtcbmltcG9ydCB7IHByb21wdCB9IGZyb20gXCJAL3V0aWxzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlUmVxdWVzdEJvZHkge1xuICBwcm9tcHQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlUmVzcG9uc2Uge1xuICBjaGF0X2lkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGUoXG4gIGJvZHk6IENyZWF0ZVJlcXVlc3RCb2R5LFxuICBoZWFkZXJzOiBIZWFkZXJzLFxuKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICBjb25zdCB0b2tlbiA9IGhlYWRlcnMuZ2V0KFwiQXV0aG9yaXphdGlvblwiKT8uc3BsaXQoXCIgXCIpWzFdO1xuICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5VTkFVVEhPUklaRURfTU9ERSlcbiAgaWYgKCF0b2tlbiAmJiBwcm9jZXNzLmVudi5VTkFVVEhPUklaRURfTU9ERSAhPT0gXCJ0cnVlXCIpIHtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiVW5hdXRob3JpemVkXCIsIHsgc3RhdHVzOiA0MDEgfSk7XG4gIH1cbiAgY29uc3QgdXNlcklkID1cbiAgICBwcm9jZXNzLmVudi5VTkFVVEhPUklaRURfTU9ERSA9PT0gXCJ0cnVlXCJcbiAgICAgID8gcHJvY2Vzcy5lbnYuVU5BVVRIT1JJWkVEX01PREVfVVNFUl9JRFxuICAgICAgOiAoYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKHRva2VuKSkuZGF0YS51c2VyPy5pZDtcblxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgIC5mcm9tKFwiY2hhdHNcIilcbiAgICAuaW5zZXJ0KHtcbiAgICAgIHVpZDogdXNlcklkLFxuICAgICAgZGVzaWduZXJfY29udGV4dDogSlNPTi5zdHJpbmdpZnkoW1xuICAgICAgICB7XG4gICAgICAgICAgcm9sZTogXCJzeXN0ZW1cIixcbiAgICAgICAgICBjb250ZW50OiBTWVNURU0sXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHkucHJvbXB0XG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICByb2xlOiBcInVzZXJcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IHByb21wdChVU0VSLCB7XG4gICAgICAgICAgICAgIHByb21wdDogYm9keS5wcm9tcHQsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICB9XG4gICAgICAgICAgOiB2b2lkIDAsXG4gICAgICBdKSxcbiAgICAgIGRpc3BsYXllZF9tZXNzYWdlczogSlNPTi5zdHJpbmdpZnkoW1xuICAgICAgICB7XG4gICAgICAgICAgcm9sZTogJ3VzZXInLFxuICAgICAgICAgIGNvbnRlbnQ6IGJvZHkucHJvbXB0XG4gICAgICAgIH1cbiAgICAgIF0pLFxuICAgIH0pXG4gICAgLnNlbGVjdChcInVpZCwgaWRcIilcbiAgICAuc2luZ2xlKCk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShcIkludGVybmFsIFNlcnZlciBFcnJvcjogXCIgKyBlcnJvci5tZXNzYWdlLCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcbiAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBjaGF0X2lkOiBkYXRhLmlkLFxuICAgIH0pLFxuICAgIHtcbiAgICAgIHN0YXR1czogMjAwLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgfSxcbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdXBhYmFzZSIsIlNZU1RFTSIsIlVTRVIiLCJwcm9tcHQiLCJjcmVhdGUiLCJib2R5IiwiaGVhZGVycyIsInRva2VuIiwiZ2V0Iiwic3BsaXQiLCJjb25zb2xlIiwibG9nIiwicHJvY2VzcyIsImVudiIsIlVOQVVUSE9SSVpFRF9NT0RFIiwiUmVzcG9uc2UiLCJzdGF0dXMiLCJ1c2VySWQiLCJVTkFVVEhPUklaRURfTU9ERV9VU0VSX0lEIiwiYXV0aCIsImdldFVzZXIiLCJkYXRhIiwidXNlciIsImlkIiwiZXJyb3IiLCJmcm9tIiwiaW5zZXJ0IiwidWlkIiwiZGVzaWduZXJfY29udGV4dCIsIkpTT04iLCJzdHJpbmdpZnkiLCJyb2xlIiwiY29udGVudCIsImRpc3BsYXllZF9tZXNzYWdlcyIsInNlbGVjdCIsInNpbmdsZSIsIm1lc3NhZ2UiLCJjaGF0X2lkIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./services/create.ts\n");

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

/***/ "(rsc)/./workflow/designer/prompts.ts":
/*!**************************************!*\
  !*** ./workflow/designer/prompts.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ADDITION: () => (/* binding */ ADDITION),\n/* harmony export */   SYSTEM: () => (/* binding */ SYSTEM),\n/* harmony export */   SYSTEM_ADDITION: () => (/* binding */ SYSTEM_ADDITION),\n/* harmony export */   USER: () => (/* binding */ USER)\n/* harmony export */ });\nconst SYSTEM = `\nYou are a lesson designer specialized in breaking down complex concepts into clear, logical steps. Your task is to create a step-by-step lesson plan that guides students from basic understanding to mastery of the given topic.\n\nFor each question provided by the user, design a detailed teaching sequence where each step builds upon previous knowledge. Your steps should be progressive, starting from the most fundamental concepts and gradually advancing to more complex ideas.\n\nFor example, when teaching trigonometry to beginners:\n1. First introduce the right triangle and its basic components\n2. Then explain one concept (like sine) using this foundation\n3. Build upon this understanding for subsequent concepts\n4. Connect these concepts together\n\nEach step in your lesson plan must include:\n- A sequential step number\n- A clear problem-solving process or concept introduction\n- The essential knowledge points needed for this step\n- Detailed guidance on how teachers should explain this content\n- A concrete conclusion or key takeaway from this step\n\nThe output must be a JSON array following this JSON schema:\n\n\\`\\`\\`json\n{\n  \"type\": \"array\",\n  \"items\": {\n    \"type\": \"object\",\n    \"properties\": {\n      \"step\": {\n        \"type\": \"number\",\n        \"description\": \"The step number of the lesson\"\n      },\n      \"problem\": {\n        \"type\": \"string\",\n        \"description\": \"What specific concept or problem this step addresses\"\n      },\n      \"knowledge\": {\n        \"type\": \"string\",\n        \"description\": \"The fundamental knowledge points needed for this step\"\n      },\n      \"explanation\": {\n        \"type\": \"string\",\n        \"description\": \"Detailed guidance for teachers on how to present and explain this content\"\n      },\n      \"conclusion\": {\n        \"type\": \"string\",\n        \"description\": \"The key learning outcome or solution for this step\"\n      }\n    }\n  }\n}\n\\`\\`\\`\n\nNotice: this is JSON schema, not the final output reference.\n\nRemember to:\n- Start with the most basic concepts\n- Build each step on previous knowledge\n- Use clear, age-appropriate explanations\n- Include visual or practical examples when helpful\n- Ensure each step has a clear learning outcome\n`.trim();\nconst USER = `\nPlease design implementation steps based on the following user description:\n\n\\`\\`\\`markdown\n<:insert:prompt>\n\\`\\`\\`\n\nRequirements:\n1. Return the response as a pure JSON object\n2. Do not include any markdown code blocks or additional text\n3. Break down the implementation into clear, sequential steps\n4. Each step should be specific and actionable\n`.trim();\nconst SYSTEM_ADDITION = `\nAnd I find some extra information you need to use:\n\n\\`\\`\\`markdown\n<:insert:refs>\n\\`\\`\\`\n`.trim();\nconst ADDITION = `\nGiven that the user has a question at step <:insert:step>, design additional sub-steps to address this new question while building upon the previous step designs.\n\nUser's question:\n\\`\\`\\`markdown\n<:insert:prompt>\n\\`\\`\\`\n\nRequirements:\n1. Output the response as pure JSON data without markdown code blocks or additional text\n2. Ensure step names are unique and follow a hierarchical naming pattern:\n   - For questions about step N, use step numbers like \"N.1\", \"N.2\", etc.\n   - Example: If user asks about step 1, create steps like \"1.1\", \"1.2\", etc.\n3. Each new step should directly relate to and elaborate on the step being questioned\n`.trim();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi93b3JrZmxvdy9kZXNpZ25lci9wcm9tcHRzLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxNQUFNQSxTQUFTLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkR2QixDQUFDLENBQUNDLElBQUksR0FBRTtBQUVELE1BQU1DLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7O0FBWXJCLENBQUMsQ0FBQ0QsSUFBSSxHQUFFO0FBRUQsTUFBTUUsa0JBQWtCLENBQUM7Ozs7OztBQU1oQyxDQUFDLENBQUNGLElBQUksR0FBRTtBQUVELE1BQU1HLFdBQVcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFjekIsQ0FBQyxDQUFDSCxJQUFJLEdBQUUiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hY2JveGxpdS9wcm9qZWN0cy9iaWpvbi9lY2hvYWkvd29ya2Zsb3cvZGVzaWduZXIvcHJvbXB0cy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgU1lTVEVNID0gYFxuWW91IGFyZSBhIGxlc3NvbiBkZXNpZ25lciBzcGVjaWFsaXplZCBpbiBicmVha2luZyBkb3duIGNvbXBsZXggY29uY2VwdHMgaW50byBjbGVhciwgbG9naWNhbCBzdGVwcy4gWW91ciB0YXNrIGlzIHRvIGNyZWF0ZSBhIHN0ZXAtYnktc3RlcCBsZXNzb24gcGxhbiB0aGF0IGd1aWRlcyBzdHVkZW50cyBmcm9tIGJhc2ljIHVuZGVyc3RhbmRpbmcgdG8gbWFzdGVyeSBvZiB0aGUgZ2l2ZW4gdG9waWMuXG5cbkZvciBlYWNoIHF1ZXN0aW9uIHByb3ZpZGVkIGJ5IHRoZSB1c2VyLCBkZXNpZ24gYSBkZXRhaWxlZCB0ZWFjaGluZyBzZXF1ZW5jZSB3aGVyZSBlYWNoIHN0ZXAgYnVpbGRzIHVwb24gcHJldmlvdXMga25vd2xlZGdlLiBZb3VyIHN0ZXBzIHNob3VsZCBiZSBwcm9ncmVzc2l2ZSwgc3RhcnRpbmcgZnJvbSB0aGUgbW9zdCBmdW5kYW1lbnRhbCBjb25jZXB0cyBhbmQgZ3JhZHVhbGx5IGFkdmFuY2luZyB0byBtb3JlIGNvbXBsZXggaWRlYXMuXG5cbkZvciBleGFtcGxlLCB3aGVuIHRlYWNoaW5nIHRyaWdvbm9tZXRyeSB0byBiZWdpbm5lcnM6XG4xLiBGaXJzdCBpbnRyb2R1Y2UgdGhlIHJpZ2h0IHRyaWFuZ2xlIGFuZCBpdHMgYmFzaWMgY29tcG9uZW50c1xuMi4gVGhlbiBleHBsYWluIG9uZSBjb25jZXB0IChsaWtlIHNpbmUpIHVzaW5nIHRoaXMgZm91bmRhdGlvblxuMy4gQnVpbGQgdXBvbiB0aGlzIHVuZGVyc3RhbmRpbmcgZm9yIHN1YnNlcXVlbnQgY29uY2VwdHNcbjQuIENvbm5lY3QgdGhlc2UgY29uY2VwdHMgdG9nZXRoZXJcblxuRWFjaCBzdGVwIGluIHlvdXIgbGVzc29uIHBsYW4gbXVzdCBpbmNsdWRlOlxuLSBBIHNlcXVlbnRpYWwgc3RlcCBudW1iZXJcbi0gQSBjbGVhciBwcm9ibGVtLXNvbHZpbmcgcHJvY2VzcyBvciBjb25jZXB0IGludHJvZHVjdGlvblxuLSBUaGUgZXNzZW50aWFsIGtub3dsZWRnZSBwb2ludHMgbmVlZGVkIGZvciB0aGlzIHN0ZXBcbi0gRGV0YWlsZWQgZ3VpZGFuY2Ugb24gaG93IHRlYWNoZXJzIHNob3VsZCBleHBsYWluIHRoaXMgY29udGVudFxuLSBBIGNvbmNyZXRlIGNvbmNsdXNpb24gb3Iga2V5IHRha2Vhd2F5IGZyb20gdGhpcyBzdGVwXG5cblRoZSBvdXRwdXQgbXVzdCBiZSBhIEpTT04gYXJyYXkgZm9sbG93aW5nIHRoaXMgSlNPTiBzY2hlbWE6XG5cblxcYFxcYFxcYGpzb25cbntcbiAgXCJ0eXBlXCI6IFwiYXJyYXlcIixcbiAgXCJpdGVtc1wiOiB7XG4gICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgIFwic3RlcFwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGhlIHN0ZXAgbnVtYmVyIG9mIHRoZSBsZXNzb25cIlxuICAgICAgfSxcbiAgICAgIFwicHJvYmxlbVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiV2hhdCBzcGVjaWZpYyBjb25jZXB0IG9yIHByb2JsZW0gdGhpcyBzdGVwIGFkZHJlc3Nlc1wiXG4gICAgICB9LFxuICAgICAgXCJrbm93bGVkZ2VcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSBmdW5kYW1lbnRhbCBrbm93bGVkZ2UgcG9pbnRzIG5lZWRlZCBmb3IgdGhpcyBzdGVwXCJcbiAgICAgIH0sXG4gICAgICBcImV4cGxhbmF0aW9uXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJEZXRhaWxlZCBndWlkYW5jZSBmb3IgdGVhY2hlcnMgb24gaG93IHRvIHByZXNlbnQgYW5kIGV4cGxhaW4gdGhpcyBjb250ZW50XCJcbiAgICAgIH0sXG4gICAgICBcImNvbmNsdXNpb25cIjoge1xuICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSBrZXkgbGVhcm5pbmcgb3V0Y29tZSBvciBzb2x1dGlvbiBmb3IgdGhpcyBzdGVwXCJcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxcYFxcYFxcYFxuXG5Ob3RpY2U6IHRoaXMgaXMgSlNPTiBzY2hlbWEsIG5vdCB0aGUgZmluYWwgb3V0cHV0IHJlZmVyZW5jZS5cblxuUmVtZW1iZXIgdG86XG4tIFN0YXJ0IHdpdGggdGhlIG1vc3QgYmFzaWMgY29uY2VwdHNcbi0gQnVpbGQgZWFjaCBzdGVwIG9uIHByZXZpb3VzIGtub3dsZWRnZVxuLSBVc2UgY2xlYXIsIGFnZS1hcHByb3ByaWF0ZSBleHBsYW5hdGlvbnNcbi0gSW5jbHVkZSB2aXN1YWwgb3IgcHJhY3RpY2FsIGV4YW1wbGVzIHdoZW4gaGVscGZ1bFxuLSBFbnN1cmUgZWFjaCBzdGVwIGhhcyBhIGNsZWFyIGxlYXJuaW5nIG91dGNvbWVcbmAudHJpbSgpXG5cbmV4cG9ydCBjb25zdCBVU0VSID0gYFxuUGxlYXNlIGRlc2lnbiBpbXBsZW1lbnRhdGlvbiBzdGVwcyBiYXNlZCBvbiB0aGUgZm9sbG93aW5nIHVzZXIgZGVzY3JpcHRpb246XG5cblxcYFxcYFxcYG1hcmtkb3duXG48Omluc2VydDpwcm9tcHQ+XG5cXGBcXGBcXGBcblxuUmVxdWlyZW1lbnRzOlxuMS4gUmV0dXJuIHRoZSByZXNwb25zZSBhcyBhIHB1cmUgSlNPTiBvYmplY3RcbjIuIERvIG5vdCBpbmNsdWRlIGFueSBtYXJrZG93biBjb2RlIGJsb2NrcyBvciBhZGRpdGlvbmFsIHRleHRcbjMuIEJyZWFrIGRvd24gdGhlIGltcGxlbWVudGF0aW9uIGludG8gY2xlYXIsIHNlcXVlbnRpYWwgc3RlcHNcbjQuIEVhY2ggc3RlcCBzaG91bGQgYmUgc3BlY2lmaWMgYW5kIGFjdGlvbmFibGVcbmAudHJpbSgpXG5cbmV4cG9ydCBjb25zdCBTWVNURU1fQURESVRJT04gPSBgXG5BbmQgSSBmaW5kIHNvbWUgZXh0cmEgaW5mb3JtYXRpb24geW91IG5lZWQgdG8gdXNlOlxuXG5cXGBcXGBcXGBtYXJrZG93blxuPDppbnNlcnQ6cmVmcz5cblxcYFxcYFxcYFxuYC50cmltKClcblxuZXhwb3J0IGNvbnN0IEFERElUSU9OID0gYFxuR2l2ZW4gdGhhdCB0aGUgdXNlciBoYXMgYSBxdWVzdGlvbiBhdCBzdGVwIDw6aW5zZXJ0OnN0ZXA+LCBkZXNpZ24gYWRkaXRpb25hbCBzdWItc3RlcHMgdG8gYWRkcmVzcyB0aGlzIG5ldyBxdWVzdGlvbiB3aGlsZSBidWlsZGluZyB1cG9uIHRoZSBwcmV2aW91cyBzdGVwIGRlc2lnbnMuXG5cblVzZXIncyBxdWVzdGlvbjpcblxcYFxcYFxcYG1hcmtkb3duXG48Omluc2VydDpwcm9tcHQ+XG5cXGBcXGBcXGBcblxuUmVxdWlyZW1lbnRzOlxuMS4gT3V0cHV0IHRoZSByZXNwb25zZSBhcyBwdXJlIEpTT04gZGF0YSB3aXRob3V0IG1hcmtkb3duIGNvZGUgYmxvY2tzIG9yIGFkZGl0aW9uYWwgdGV4dFxuMi4gRW5zdXJlIHN0ZXAgbmFtZXMgYXJlIHVuaXF1ZSBhbmQgZm9sbG93IGEgaGllcmFyY2hpY2FsIG5hbWluZyBwYXR0ZXJuOlxuICAgLSBGb3IgcXVlc3Rpb25zIGFib3V0IHN0ZXAgTiwgdXNlIHN0ZXAgbnVtYmVycyBsaWtlIFwiTi4xXCIsIFwiTi4yXCIsIGV0Yy5cbiAgIC0gRXhhbXBsZTogSWYgdXNlciBhc2tzIGFib3V0IHN0ZXAgMSwgY3JlYXRlIHN0ZXBzIGxpa2UgXCIxLjFcIiwgXCIxLjJcIiwgZXRjLlxuMy4gRWFjaCBuZXcgc3RlcCBzaG91bGQgZGlyZWN0bHkgcmVsYXRlIHRvIGFuZCBlbGFib3JhdGUgb24gdGhlIHN0ZXAgYmVpbmcgcXVlc3Rpb25lZFxuYC50cmltKClcbiJdLCJuYW1lcyI6WyJTWVNURU0iLCJ0cmltIiwiVVNFUiIsIlNZU1RFTV9BRERJVElPTiIsIkFERElUSU9OIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./workflow/designer/prompts.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0","vendor-chunks/tr46@0.0.3","vendor-chunks/@supabase+auth-js@2.69.1","vendor-chunks/@supabase+realtime-js@2.11.2","vendor-chunks/@supabase+postgrest-js@1.19.2","vendor-chunks/@supabase+node-fetch@2.6.15","vendor-chunks/whatwg-url@5.0.0","vendor-chunks/@supabase+storage-js@2.7.1","vendor-chunks/@supabase+supabase-js@2.49.3","vendor-chunks/@supabase+functions-js@2.4.4","vendor-chunks/webidl-conversions@3.0.1"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@15.2.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcreate%2Froute&page=%2Fapi%2Fcreate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcreate%2Froute.ts&appDir=%2FUsers%2Facboxliu%2Fprojects%2Fbijon%2Fechoai%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Facboxliu%2Fprojects%2Fbijon%2Fechoai&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();