import React, { useEffect } from "react";

const CompleteGreetWidget = () => {
    useEffect(() => {
        // Replace with the desired CompleteGreet_ID
        const completeGreetID = "eb382bcb-d521-5ee9-9477-3177d5b4778c";
        window.CompleteGreet_ID = completeGreetID;

        const script = document.createElement("script");
        script.async = 1;
        script.src = "https://completegreet.com/js/CompleteGreetInstallation.js";

        document.getElementsByTagName("head")[0].appendChild(script);

        return () => {
            // Clean up the script when the component is unmounted
            document.getElementsByTagName("head")[0].removeChild(script);
        };
    }, []);

    return <div>CompleteGreet Widget will be loaded here.</div>;
};

export default CompleteGreetWidget;
