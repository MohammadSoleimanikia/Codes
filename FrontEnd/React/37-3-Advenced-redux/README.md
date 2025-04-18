# Side Effects, Async Task & Redux 
the reducers must be pure ,`side effect` free and `synchronous` so where should we put our asynchronous codes?
1. directly in the component via useEffect and dispatch an action when side effect done 
2. inside the action Creators

test git 