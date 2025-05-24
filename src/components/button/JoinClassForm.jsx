export default function JoinClassForm({ user, classCode, setClassCode }) {
  return (
    <>
      <div className="mb-6 p-3 md:p-4 border rounded-lg bg-gray-50">
        <p className="text-sm text-gray-600 mb-2">You're currently signed in as</p>
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-600"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="font-medium">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
          <button className="border border-blue-600 text-blue-600 px-2 py-1 rounded-md text-sm hover:bg-blue-50 transition-colors cursor-pointer">
            Switch
          </button>
        </div>
      </div>

      <div className="mb-6">
        <p className="font-medium mb-2">Class code</p>
        <p className="text-sm text-gray-600 mb-4">
          Ask your teacher for the class code, then enter it here.
        </p>
        <input
          type="text"
          value={classCode}
          onChange={(e) => setClassCode(e.target.value)}
          placeholder="Class code"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="mb-2">
        <p className="font-medium mb-2">To sign in with a class code</p>
        <ul className="list-disc pl-6 text-sm text-gray-600">
          <li className="mb-2">Use an authorized account</li>
          <li className="mb-2">Use a class code with 5–8 letters or numbers, and no spaces or symbols</li>
        </ul>
      </div>
    </>
  );
}
