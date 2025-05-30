export default function Input({ type = "text", name = "", id = "", className = "" }) {
  const inputId = id || name;
  return (
    <div className={`w-full flex flex-col ${className}`}>
      <label htmlFor={inputId} className="font-medium mb-1">
        {name}
      </label>
      <input
        type={type}
        id={inputId}
        className="w-full focus:outline-none px-2 py-1 bg-[#e9e9e9] shadow-md shadow-gray-300 rounded"
      />
    </div>
  )
}
