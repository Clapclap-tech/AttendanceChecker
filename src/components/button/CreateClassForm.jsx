export default function CreateClassForm({ className, setClassName, section, setSection, subject, setSubject, room, setRoom }) {
  return (
    <div className="space-y-5">
      {[
        { label: "Class name (required)", value: className, setValue: setClassName },
        { label: "Section", value: section, setValue: setSection },
        { label: "Subject", value: subject, setValue: setSubject },
        { label: "Room", value: room, setValue: setRoom }
      ].map((field, index) => (
        <div key={index} className="border-b border-gray-300 focus-within:border-blue-500 transition-colors pb-1">
          <input
            type="text"
            value={field.value}
            onChange={(e) => field.setValue(e.target.value)}
            placeholder={field.label}
            className="w-full p-2 outline-none text-base"
          />
        </div>
      ))}
    </div>
  );
}
