import React from "react";

const LoadingPage = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
            <div className="absolute text-center">
                <h1 className="text-2xl font-bold">Loading...</h1>
                <p className="text-lg">Please wait while we load the data.</p>
                <p className="text-lg">This may take a few seconds.</p>
                <p className="text-lg">If it takes too long, please refresh the page.</p>
                <p className="text-lg">Thank you for your patience!</p>
            </div>
        </div>
    )
}

export default LoadingPage;
// This is a loading page that will be displayed while the data is being loaded.