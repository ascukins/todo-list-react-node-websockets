## Websockets Todo List

To run front-end:

```
npm install
npm start
```

[Open local copy in a browser](http://localhost:3000/).

To run back-end see backend part readme file

## Functionality

_There are a lot of user stories, but I had very limited time for the task, so implemented only the basic ones._

_The current implementation is suitable for small count of simultaneous users only._

_To achieve a robust behavior for cases when 10 users are connected, and each one of them is performing changes simultaneously (add, delete, reorder, move, mark as done/undone) incremental list updates have to be implemented before adding features like nested tasks and reordering._

● ⚠️ (required): I as a user can create to-do items, such as a grocery list
**Done**

● ⚠️ (required): I as another user can collaborate in real-time with user - so that we can
(for example) edit our family shopping-list together
**Done**

● I as a user can mark to-do items as “done” - so that I can avoid clutter and focus on
things that are still pending
**Done**

● I as a user can filter the to-do list and view items that were marked as done - so that I
can retrospect on my prior progress
**Easy to implement.**

● I as a user can add sub-tasks to my to-do items - so that I could make logical groups of
tasks and see their overall progress
**Tree-like structure itself is easy to implement. Question is what if one user creates a subtask and another user deletes it's parent simultaneously.**

● I as a user can specify cost/price for a task or a subtask - so that I can track my
expenses / project cost
**Ok, I can even add a setup of types of metrics and an array of metrics for each task.**

● I as a user can see the sum of the subtasks aggregated in the parent task - so that in my
shopping list I can see what contributes to the overall sum. For example I can have a
task “Salad”, where I'd add all ingredients as sub-tasks, and would see how much does
salad cost on my shopping list
**Questions. Should a task have it's own metrics if it has subtasks? Should metric types be the same for all subtasks of a certain task?**

● I as a user can make infinite nested levels of subtasks
**Easy to implement. But nothing is infinite, especially screen space and computer memory. How many nesting levels to you expect?**

● I as a user can add sub-descriptions of tasks in Markdown and view them as rich text
while I'm not editing the descriptions
**Easy to implement. There are plenty of markdown parsing libraries.**

● I as a user can see the cursor and/or selection of another-user as he selects/types when
he is editing text - so that we can discuss focused words during our online call.
**Both front-end and back-end modifications required. Additional ws message types have to be implemented.**

● I as a user can create multiple to-do lists where each list has it's unique URL that I can
share with my friends - so that I could have separate to do lists for my groceries and
work related tasks
**Both front-end and back-end modifications required. Have to add react router to front-end and broadcast messages to users with filtering by list id.**

● I as a user can keep editing the list even when I lose internet connection, and can expect
it to sync up with BE as I regain connection
**What if one user creates a subtask and another user deletes it's parent?**

● I as a user can use my VR goggles to edit/browse multiple to-do lists in parallel in 3D
space so that I can feel ultra-productive
**It is possible with the current implementation. Let's test and find out if any particular improvements are needed.**

● I as a user can change the order of tasks via drag & drop
**Easy to implement.**

● I as a user can move/convert subtasks to tasks via drag & drop
**Easy to implement.**

● I as a user can be sure that my todos will be persisted so that important information is
not lost when server restarts
**Have to decide which type database storage will be most efficient for the current application load.**
