import React from "react";

function Contact() {
  return (
    <div className="bg-darkbluishgray flex justify-center items-center py-20  md:py-36">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
        <div className="space-y-10">
          <div className="space-y-6">
            <h5 className="text-lightblue text-lg font-bold"> Contacts</h5>
            <div className="flex items-center space-x-3 text-white">
              <svg
                className="w-4"
                width="29"
                height="19"
                viewBox="0 0 29 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.63356 4.86322C9.64587 6.23978 11.7938 7.30651 13.9975 8.32821C17.7166 6.97792 21.0652 5.17305 24.4171 3.28511C25.6773 2.57485 26.9435 1.85709 28.2268 1.14468C26.631 -0.212045 21.9663 0.491245 20.6396 0.491245C16.8396 0.496605 13.0406 0.491245 9.23526 0.485884C8.13637 0.420487 6.98923 0.392613 5.91768 0.491245H4.7684C3.99864 0.494997 2.9362 0.428527 2.08496 0.709951C3.28195 1.47167 4.37226 2.36097 5.47598 3.23954C6.17819 3.7981 6.88685 4.35183 7.63356 4.86322Z"
                  fill="white"
                />
                <path
                  d="M6.11384 5.77716C4.32882 4.48154 2.72604 2.9967 0.828446 1.86511C0.497707 2.75709 0.677281 3.94228 0.564712 4.77154C0.559888 4.80424 0.570609 4.83158 0.570609 4.85892C0.225932 6.32982 0.225932 7.94225 0.187337 9.36383C0.148206 10.7415 -0.141258 12.7254 0.0865606 14.4391C0.0656549 15.2641 0.0576142 16.1303 0.238261 16.8556C3.77991 14.0623 7.54508 11.2888 11.3408 8.86746C9.5263 7.96637 7.77504 6.98273 6.11384 5.77716Z"
                  fill="white"
                />
                <path
                  d="M28.8839 6.12723C28.9439 5.00636 29.0978 3.77775 28.9075 2.64026C25.3524 4.61344 21.9443 6.63486 18.29 8.31858C20.3715 10.0586 22.4937 11.7235 24.5773 13.4405C25.457 14.1652 26.3291 14.9012 27.1884 15.656C27.4998 15.9288 27.8075 16.2065 28.1147 16.4858C28.209 16.2992 28.2958 16.1036 28.3639 15.8854C28.7472 14.6787 28.5928 13.2352 28.4985 11.8951C28.5108 11.6008 28.5247 11.3049 28.5387 11.0079C28.6443 9.38209 28.7987 7.76109 28.8839 6.12723Z"
                  fill="white"
                />
                <path
                  d="M16.6489 9.03793C15.8405 9.37832 15.022 9.70745 14.1793 10.0071C13.869 10.1175 13.6144 10.0403 13.4396 9.87095C13.3088 9.81037 13.178 9.74819 13.0478 9.68708C12.9974 9.74015 12.9422 9.79 12.8725 9.83342C8.86554 12.3389 4.85593 15.2802 1.12988 18.2273C1.4558 18.4353 1.87766 18.5613 2.43086 18.5677C4.86718 18.5972 7.3078 18.579 9.74787 18.5559C13.9665 18.6696 18.1927 18.586 22.4103 18.6851C24.0404 18.7221 25.819 18.6133 27.0514 17.7331C23.751 14.7291 20.2104 12.0762 16.7995 9.20411C16.7368 9.15157 16.6902 9.09529 16.6489 9.03793Z"
                  fill="white"
                />
              </svg>
              <p className="text-sm">support@sawamobility.com</p>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <svg
                className="w-5"
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.9471 13.4732C16.6026 13.2771 16.2431 13.1733 15.9067 13.1733C15.4065 13.1733 14.997 13.4024 14.749 13.8192C14.3568 14.2883 13.8704 14.8366 13.7524 14.9216C12.8388 15.5414 12.1237 15.471 11.3324 14.6797L6.91606 10.263C6.12977 9.47675 6.05748 8.75275 6.67306 7.84419C6.75919 7.72538 7.30748 7.23861 7.77656 6.84604C8.0757 6.66802 8.28102 6.40349 8.37099 6.07897C8.49057 5.64718 8.40252 5.13927 8.1203 4.64442C8.05378 4.53061 6.47043 1.84914 5.01166 1.07746C4.73944 0.933277 4.43261 0.857147 4.12501 0.857147C3.61825 0.857147 3.14147 1.05478 2.78313 1.41274L1.80728 2.38821C0.263915 3.93118 -0.294756 5.68025 0.145875 7.58658C0.513453 9.17531 1.58466 10.8659 3.33026 12.6112L8.98426 18.2652C11.1936 20.4745 13.2998 21.5949 15.2446 21.5949C16.6753 21.5949 18.0084 20.987 19.2072 19.7885L20.1827 18.8131C20.7752 18.2206 20.9098 17.3251 20.518 16.5845C19.7463 15.125 17.0652 13.5424 16.9471 13.4732Z"
                  fill="white"
                />
                <path
                  d="M22.6627 13.5452C21.2439 13.5452 20.0893 12.3906 20.0893 10.9718C20.0893 10.7592 19.9174 10.5873 19.7048 10.5873C19.4922 10.5873 19.3203 10.7592 19.3203 10.9718C19.3203 12.8151 20.8195 14.3142 22.6627 14.3142C22.8754 14.3142 23.0472 14.1423 23.0472 13.9297C23.0472 13.7171 22.8754 13.5452 22.6627 13.5452Z"
                  fill="white"
                />
                <path
                  d="M22.7875 12.5052C23.0001 12.5052 23.172 12.3333 23.172 12.1207C23.172 11.9081 23.0001 11.7362 22.7875 11.7362C22.4468 11.7362 22.1704 11.4594 22.1704 11.1191C22.1704 10.9065 21.9985 10.7346 21.7859 10.7346C21.5732 10.7346 21.4014 10.9065 21.4014 11.1191C21.4014 11.8831 22.0231 12.5052 22.7875 12.5052Z"
                  fill="white"
                />
                <path
                  d="M7.6677 2.01177C9.08687 2.01177 10.2411 3.16641 10.2411 4.5852C10.2411 4.79782 10.4134 4.96969 10.6256 4.96969C10.8379 4.96969 11.0101 4.79782 11.0101 4.5852C11.0101 2.74193 9.51058 1.24278 7.6677 1.24278C7.45546 1.24278 7.2832 1.41465 7.2832 1.62728C7.2832 1.8399 7.45546 2.01177 7.6677 2.01177Z"
                  fill="white"
                />
                <path
                  d="M7.57031 3.29683C7.57031 3.50946 7.74257 3.68133 7.95481 3.68133C8.29508 3.68133 8.57154 3.95816 8.57154 4.29844C8.57154 4.51107 8.74379 4.68294 8.95603 4.68294C9.16827 4.68294 9.34052 4.51107 9.34052 4.29844C9.34052 3.53407 8.7188 2.91234 7.95481 2.91234C7.74257 2.91234 7.57031 3.08421 7.57031 3.29683Z"
                  fill="white"
                />
              </svg>
              <p className="text-sm">+250 788 302 581</p>
            </div>
          </div>
          <div>
            <h5 className="text-lightblue text-lg font-bold"> Our Office</h5>
            <div className="flex items-center space-x-3 text-white">
              <svg
                className="w-3"
                width="17"
                height="27"
                viewBox="0 0 17 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.49978 0C4.13713 0 0.587891 3.54923 0.587891 7.91189C0.587891 9.10165 0.8456 10.2451 1.35366 11.3112C1.36388 11.334 1.37462 11.3564 1.38608 11.3788L7.36392 22.9531C7.58338 23.378 8.02159 23.6449 8.49968 23.6449C8.97788 23.6449 9.41609 23.3781 9.63545 22.9531L15.6117 11.382C15.622 11.362 15.6316 11.3419 15.6408 11.3215C16.1522 10.2523 16.4115 9.10544 16.4115 7.91189C16.4117 3.54923 12.8624 0 8.49978 0ZM8.49978 12.0531C6.21629 12.0531 4.35853 10.1954 4.35853 7.91189C4.35853 5.6285 6.21629 3.77074 8.49978 3.77074C10.7833 3.77074 12.641 5.6285 12.641 7.91189C12.641 10.1954 10.7833 12.0531 8.49978 12.0531Z"
                  fill="white"
                />
                <path
                  d="M11.5478 25.466H5.45254C5.02885 25.466 4.68555 25.8093 4.68555 26.233C4.68555 26.6567 5.02885 27 5.45254 27H11.5478C11.9715 27 12.3148 26.6567 12.3148 26.233C12.3148 25.8093 11.9714 25.466 11.5478 25.466Z"
                  fill="white"
                />
              </svg>
              <p className="text-sm">Kacyiru, kigali KG 5 ave gate 82</p>
            </div>
          </div>
        </div>
        <div>
          <h5 className="text-lightblue text-lg font-bold ">
            {" "}
            Reach out to us
          </h5>
          <form className="space-y-3 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Full Names
                </label>
                <input
                  id="full-name"
                  name="full-name"
                  type="text"
                  autoComplete="full-name"
                  required
                  className="appearance-none rounded-none bg-transparent border-b-2  px-3 py-2.5 placeholder-white text-white focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-xs"
                  placeholder="Full Names"
                />
              </div>
              <div className=" ">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none bg-transparent border-b-2 rounded-none px-3 py-2.5 placeholder-white text-white focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-xs"
                  placeholder="Email"
                />
              </div>
            </div>
            <div>
              {" "}
              <label className="text-white text-xs my-2">Your need</label>
              <textarea
                rows=""
                cols=""
                className="text-sm text-white   w-100 bg-transparent border-b-2  focus:shadow-none focus:ring-lightgreen focus:border-lightgreen focus:z-10 p-4"
                id="biography"
                name="biography"
                required
              ></textarea>
            </div>
            <button className="text-white bg-lightblue hover:opacity-70 rounded-xl py-2 w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
