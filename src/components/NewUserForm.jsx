import { FaCloudUploadAlt } from "react-icons/fa";

export default function NewUserForm() {
  return (
    <div className="flex min-h-screen w-full bg-white">
      {/* LEFT SIDEBAR (Curved Blue Section) */}
      <div className="hidden sm:block w-[200px] bg-blue-600 rounded-tr-[25px] rounded-br-[25px]" />

      {/* RIGHT CONTENT (Form) */}
      <div className="flex-1 p-6 sm:p-10">
        {/* MAIN HEADING */}
        <h1 className="text-2xl font-normal text-blue-700">New User</h1>

        {/* PERSONAL INFORMATION */}
        <section className="mt-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Personal Information
          </h2>
          {/* 3-Column Grid for first row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* First Name */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                First Name
              </label>
              <input
                type="text"
                className="w-full border-b rounded-xl border-blue-500 focus:outline-none px-2 py-1"
                placeholder=""
              />
            </div>
            {/* Middle Name */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Middle Name
              </label>
              <input
                type="text"
                className="w-full border-b rounded-xl border-blue-500 focus:outline-none px-2 py-1"
                placeholder=""
              />
            </div>
            {/* Last Name */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Last Name
              </label>
              <input
                type="text"
                className="w-full border-b rounded-xl border-blue-500 focus:outline-none px-2 py-1"
                placeholder=""
              />
            </div>
          </div>

          {/* 3-Column Grid for second row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* Email */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full border-b rounded-xl border-blue-500 focus:outline-none px-2 py-1"
                placeholder=""
              />
            </div>
            {/* Phone Number */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                className="w-full border-b rounded-xl border-blue-500 focus:outline-none px-2 py-1"
                placeholder=""
              />
            </div>
            {/* Date of Birth */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Date of Birth
              </label>
              <input
                type="date"
                className="w-full border-b rounded-xl border-blue-500 focus:outline-none px-2 py-1"
              />
            </div>
          </div>

          {/* Join Date (single field row) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Join Date */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Join Date
              </label>
              <input
                type="date"
                className="w-full border-b rounded-xl border-blue-500 focus:outline-none px-2 py-1"
              />
            </div>
            {/* Empty placeholders to keep spacing consistent on larger screens */}
            <div />
            <div />
          </div>
        </section>

        {/* ADDRESS DETAILS */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Address Details
          </h2>
          {/* Address Lines (2 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Address Line 1 */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Address Line 1
              </label>
              <input
                type="text"
                className="w-full border-b rounded-xl border-blue-500 focus:outline-none px-2 py-1"
              />
            </div>
            {/* Address Line 2 */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Address Line 2
              </label>
              <input
                type="text"
                className="w-full border-b rounded-xl border-blue-500 focus:outline-none px-2 py-1"
              />
            </div>
          </div>

          {/* City, District, State, Pin Code (4 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* City */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                City
              </label>
              <input
                type="text"
                className="w-full border-b rounded-xl border-blue-500 focus:outline-none px-2 py-1"
              />
            </div>
            {/* District */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                District
              </label>
              <input
                type="text"
                className="w-full border-b rounded-xl border-blue-500 focus:outline-none px-2 py-1"
              />
            </div>
            {/* State */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                State
              </label>
              <input
                type="text"
                className="w-full border-b rounded-xl border-blue-500 focus:outline-none px-2 py-1"
              />
            </div>
            {/* Pin Code */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Pin Code
              </label>
              <input
                type="text"
                className="w-full border-b rounded-xl border-blue-500 focus:outline-none px-2 py-1"
              />
            </div>
          </div>
        </section>

        {/* EMPLOYMENT DETAILS */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Employment Details
          </h2>
          {/* Position, Branch Assigned (2 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Position */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Position
              </label>
              <input
                type="text"
                className="w-full border-b rounded-xl border-blue-500 focus:outline-none px-2 py-1"
              />
            </div>
            {/* Branch Assigned */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Branch Assigned
              </label>
              <input
                type="text"
                className="w-full border-b rounded-xl border-blue-500 focus:outline-none px-2 py-1"
              />
            </div>
          </div>
        </section>

        {/* IDENTIFICATION DETAILS */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Identification Details
          </h2>
          {/* Aadhaar, Pan, MS Number (3 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Aadhaar Number */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Aadhaar Number
              </label>
              <input
                type="text"
                className="w-full border-b rounded-xl border-blue-500 focus:outline-none px-2 py-1"
              />
            </div>
            {/* Pan Number */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Pan Number
              </label>
              <input
                type="text"
                className="w-full border-b rounded-xl border-blue-500 focus:outline-none px-2 py-1"
              />
            </div>
            {/* MS Number */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                MS Number
              </label>
              <input
                type="text"
                className="w-full border-b rounded-xl border-blue-500 focus:outline-none px-2 py-1"
              />
            </div>
          </div>
        </section>

        {/* OTHER INFORMATION */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Other Information
          </h2>
          {/* Status, Created By, Created Date (3 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Status */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Status
              </label>
              <input
                type="text"
                className="w-full border-b rounded-xl border-blue-500 focus:outline-none px-2 py-1"
              />
            </div>
            {/* Created By */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Created By
              </label>
              <input
                type="text"
                className="w-full border-b rounded-xl border-blue-500 focus:outline-none px-2 py-1"
              />
            </div>
            {/* Created Date */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Created Date
              </label>
              <input
                type="date"
                className="w-full border-b rounded-xl border-blue-500 focus:outline-none px-2 py-1"
              />
            </div>
          </div>
        </section>

        {/* UPLOAD PROFILE PICTURE */}
        <section className="mb-6 flex flex-row justify-between flex flex-wrap">
            <div className="w-full">
                <h2 className="text-lg font-medium text-black mb-4">
                        Upload Profile Picture
                </h2>
            </div>
            <div>
                <div>
                    <label className="inline-flex bg-blue-500 w-52 text-sm text-white px-4 py-2 rounded-xl cursor-pointer hover:bg-blue-600 items-center justify-between">
                    Choose File
                    <FaCloudUploadAlt size={22} />
                    <input
                        type="file"
                        className="hidden"
                        onChange={() => {}}
                    />
                    </label>
                </div>
            </div>
           {/* REGISTER BUTTON */}
            <div>
            <button
                type="button"
                className="bg-blue-600 text-white font-semibold px-12 py-2 w-52 rounded-xl hover:bg-blue-700 transition-colors"
            >
                Register Now
            </button>
            </div>
        </section>
      </div>
    </div>
  );
}
