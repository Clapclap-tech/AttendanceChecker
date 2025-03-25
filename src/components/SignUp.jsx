import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./Firebase";

function SignUp() {

    const [email, setEmail] = useState("");
    const [idNumber, setIdNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
          await createUserWithEmailAndPassword(auth,email,password);
          const user = auth.currentUser;
          console.log(user);
          console.log("User Registered");
        
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8" onSubmit={handleRegister}>
        {/**/}
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <img class="mx-auto h-30 w-auto" src="/logo.png " alt="CTU Logo"></img>
          <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Create your account</h2>
        </div>

        {/*form wrapper*/}
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" action="#" method="POST">
            {/*email address text and text box*/}
            <div>
              <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
              <div class="mt-2">
                <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} autocomplete="email" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"></input>
              </div>
            </div>

            {/*password text, text box, forgot password*/}
            <div>
              <div class="flex items-center justify-between">
                <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
              </div>

              <div class="mt-2">
                <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} autocomplete="current-password" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"></input>
              </div>
            </div>

            {/*submit button*/}
            <div>
              <button type="submit" class="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Sign in</button>
            </div>
          </form>
          {/**/}
          <p class="mt-10 text-center text-sm/6 text-gray-500">
            Already have an account?
            <a href="#" class="font-semibold text-blue-600 hover:text-blue-500"> Sign In</a>
          </p>
        </div>
      </div>
    );
}

export default SignUp