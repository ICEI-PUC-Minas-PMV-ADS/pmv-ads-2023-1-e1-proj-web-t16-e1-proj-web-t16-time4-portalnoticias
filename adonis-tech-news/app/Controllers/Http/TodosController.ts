import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Todo from "App/Models/Todo";

export default class TodosController {

    public async index({ request}: HttpContextContract)
    {
    const todos = await Todo.query();
    return todos
    }
    
    public async show({ request, params}: HttpContextContract)
    {
        try {
            const todo = await Todo.find(params.id);
            if(todo){
            return todo
        }
        } catch (error) {
        	console.log(error)
        }
    }
    
    public async update({ auth, request, params}: HttpContextContract)
    {
        const todo = await Todo.find(params.id);
        if (todo) {
            todo.title = request.input('title');
            todo.content = request.input('desc');
            todo.done = request.input('done')
            
            if (await todo.save()) {
            	return todo
        	}
        	return; // 422
        }
        return; // 401
    }
    
    public async store({ auth, request, response}: HttpContextContract)
    {
        const user = await auth.authenticate();
        const todo = new Todo();
        todo.title = request.input('title');
        todo.desc = request.input('desc');
        await todo.save();
        return todo
    }
    
    public async destroy({response, auth, request, params}: HttpContextContract)
    {
        const user = await auth.authenticate();
        const todo = await Todo.query().where('id', params.id).delete();
        return response.json({message:"Deleted successfully"})
    }
}