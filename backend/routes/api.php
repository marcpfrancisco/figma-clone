use App\Http\Controllers\PageController;

<!-- Define a group route for this  -->
Route::get('/pages', [PageController::class, 'index']);
Route::post('/pages', [PageController::class, 'store']);
Route::get('/pages/{id}', [PageController::class, 'show']);
Route::put('/pages/{id}', [PageController::class, 'update']);
Route::delete('/pages/{id}', [PageController::class, 'destroy']);