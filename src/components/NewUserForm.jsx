import { FaCloudUploadAlt } from "react-icons/fa";

export default function NewUserForm() {
  return (
    <div className="flex min-h-screen w-full bg-white">
      <div className="hidden sm:block w-[200px] bg-blue-600 rounded-tr-[25px] rounded-br-[25px]" />
      <div className="flex-1 p-6 sm:p-10">
        <h1 className="text-2xl font-normal text-blue-700">New User</h1>
        <section className="mt-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Personal Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Join Date
              </label>
              <input
                type="date"
                className="w-full border-b rounded-xl border-blue-500 focus:outline-none px-2 py-1"
              />
            </div>
            <div />
            <div />
          </div>
        </section>
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Address Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Address Line 1
              </label>
              <input
                type="text"
                className="w-full border-b rounded-xl border-blue-500 focus:outline-none px-2 py-1"
              />
            </div>
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                City
              </label>
              <input
                type="text"
                className="w-full border-b rounded-xl border-blue-500 focus:outline-none px-2 py-1"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                District
              </label>
              <input
                type="text"
                className="w-full border-b rounded-xl border-blue-500 focus:outline-none px-2 py-1"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                State
              </label>
              <input
                type="text"
                className="w-full border-b rounded-xl border-blue-500 focus:outline-none px-2 py-1"
              />
            </div>
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
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Employment Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Position
              </label>
              <input
                type="text"
                className="w-full border-b rounded-xl border-blue-500 focus:outline-none px-2 py-1"
              />
            </div>
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
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Identification Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Aadhaar Number
              </label>
              <input
                type="text"
                className="w-full border-b rounded-xl border-blue-500 focus:outline-none px-2 py-1"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Pan Number
              </label>
              <input
                type="text"
                className="w-full border-b rounded-xl border-blue-500 focus:outline-none px-2 py-1"
              />
            </div>
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
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Other Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Status
              </label>
              <input
                type="text"
                className="w-full border-b rounded-xl border-blue-500 focus:outline-none px-2 py-1"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Created By
              </label>
              <input
                type="text"
                className="w-full border-b rounded-xl border-blue-500 focus:outline-none px-2 py-1"
              />
            </div>
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
