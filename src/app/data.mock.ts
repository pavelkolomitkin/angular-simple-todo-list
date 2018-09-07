import {Category} from './models/category.model';
import {TodoList} from './models/todolist.model';
import {Todo} from './models/todo.model';

export const CATEGORIES: Array<Category> = [
    new Category('Home', [
        new TodoList('Cleaning', [
            new Todo('Kitchen', 'Cleaning of the sink'),
            new Todo('Bathtub', 'Cleaning of the bathtub with the floor'),
            new Todo('Windows', 'Washing of windows in bedroom and living room')
        ]),
        new TodoList('Resolve problems with servicing', [
            new Todo('Fixing the faucet', 'Call the plumber')
        ]),
    ]),

    new Category('Work', [
        new TodoList('Current task resolving', [
            new Todo('Remove useless and unused files', 'Check google disk, check local computer'),
            new Todo('Create charts for data of previous month', 'Create google sheet')
        ]),
        new TodoList('Planning tasks on the feature month', [
            new Todo('Create tasks for sales division', ''),
            new Todo('Create tasks for developers', 'Need to complete CRM of our system')
        ]),
        new TodoList('Meetings', [
            new Todo('To meet customer A', 'Accept any suggestions by product'),
            new Todo('Make an appointment with company "TnB"', 'We need to sign the contract'),
        ]),
    ])
];