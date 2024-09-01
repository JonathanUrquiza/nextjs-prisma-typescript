import TaskCard from "@/components/TaskCard";
import { prisma } from "@/libs/prisma";



async function LoadTask() {
  return await prisma.task.findMany()
}
 
async function HomePage() {

  const tasks = await LoadTask()
  
  return (
    <div className="grid grid-cols-3 gap-3">
      {tasks.map(task => (
        <TaskCard task={task}  key={task.id} />
      ))}
    </div>
  )
}

export default HomePage;