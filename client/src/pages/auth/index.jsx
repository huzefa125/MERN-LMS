import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import CommonForm from "@/components/common-form";
import { signInFormControls, signUpFormControls } from "@/config";
import { useState } from "react";
function AuthPage() {
    const [activeTab,setActiveTab] = useState('signin')

    function handleTabChange(value){
        setActiveTab(value)
    }
    return( 
        <>
            <div className="flex flex-col min-h-screen">
                <header className="px-4 lg:px-6 h-16 flex items-center border-b">
                    <Link to={'/'} className="flex items-center justify-center">
                        <GraduationCap className="h-8 w-8 mr-4" />
                        <span className="font-extrabold text-xl">LMS LEARN</span>
                    </Link>
                </header>
                <div className="min-h-[calc(100vh-4rem)] grid place-items-center bg-background">
                    <Tabs 
                        value={activeTab}
                        defaultValue="signin"
                        onValueChange={handleTabChange}
                        className="w-full max-w-md"> 
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="signin">Sign In</TabsTrigger>
                            <TabsTrigger value="signup">Sign Up</TabsTrigger>
                        </TabsList>
                        <TabsContent value='signin'>
                          <CommonForm
                            formControls={signInFormControls}
                            buttonText="Sign In"
                            formData={{}}
                            setFormData={() => {}}
                            handleSubmit={() => {}}
                          />
                        </TabsContent>
                        <TabsContent value='signup'>
                          <CommonForm
                            formControls={signUpFormControls}
                            buttonText="Sign Up"
                            formData={{}}
                            setFormData={() => {}}
                            handleSubmit={() => {}}
                          />
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </>
     );
}

export default AuthPage;