export default function JoinClassForm({ user, classCode, setClassCode }) {
  return (
    <>

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
