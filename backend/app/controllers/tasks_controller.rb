class TasksController < ApplicationController
  def index
    begin_tasks = Task.where(status: "begin")
    doing_tasks = Task.where(status: "doing")
    end_tasks = Task.where(status: "end")
    render json: {
                 begin_tasks: begin_tasks,
                 doing_tasks: doing_tasks,
                 end_tasks: end_tasks
                 }
  end
end
