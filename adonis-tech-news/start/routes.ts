import Route from '@ioc:Adonis/Core/Route'
import AuthController from 'App/Controllers/Http/AuthController';
import TodosController from 'App/Controllers/Http/TodosController';

Route.get('/', async () => {
  return {hello: 'Hello World!'}
})

Route.group(() => {

  Route.post("register", "AuthController.register");
  Route.post('login', 'AuthController.login');

      Route.group(() => {
        Route.get("check", "AuthController.check");
        Route.get("todos", "TodosController.index");
        Route.get("todos/:id", "TodosController.show");
        Route.put("todos/update", "TodosController.update");
        Route.post("todos", "TodosController.store");
      }).middleware("auth:api");


}).prefix("api");
