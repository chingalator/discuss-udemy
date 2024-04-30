//import { Button } from '@nextui-org/react';
//import * as actions from '@/actions';
//import { auth } from '@/auth';
//import Profile from '@/components/profile';
import TopicCreateForm from "@/components/topics/topic-create-form"
import TopicList from "@/components/topics/topic-list";


export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2 ">
          Top Posts
        </h1>
      </div>
      <div>
        <TopicCreateForm />
        <TopicList>
          
        </TopicList>
      </div>

    </div>

  )
 /*  const session = await auth();
  return (
    <div>
      <form action={ actions.signIn}>
        <Button type="submit">
         Sign In
        </Button>
      </form>

     <form action={ actions.signOut}>
        <Button type="submit">
         Sign Out
        </Button>
      </form>

      {
        session?.user ? 
        <div> 
          Signed In <br />
          {JSON.stringify(session.user)}
          </div> : 
        <div>
          Signed Out
        </div>
      }
      <Profile />
    </div>
  ); */
}
