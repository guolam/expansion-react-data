export const ActionButton = ({ text, action }) => {
    return (
        <>
            <button className="shadow-lg text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-400 dark:border-gray-400 w-30" type="button" onClick={action}>
                {text}
            </button>
        </>
    );
};