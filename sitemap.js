SalesforceInteractions.init({
    cookieDomain: "sales-staging.ahm.ninja"
}).then(() => {
    const sitemapConfig = {
        global: {
            
            onActionEvent: (actionEvent) => {

                // Add a log to the browser console
                console.log("MCP: ", actionEvent);
                return actionEvent;

            },
            listeners: [

            ]
        },
        pageTypeDefault: {
            name: "default",
            interaction: { name: "Default Page" }
        },

        pageTypes: [
            {
                name: "home",
                isMatch: () => (/^\/$/).test(window.location.pathname),
                interaction: {name: "View Homepage"}
            },
            {
                name: "specsavers",
                isMatch: () => (/\/perks\/specsavers/).test(window.location.pathname),
                interaction: {name: "View Specsavers"}
            },
            {
                name: "goodlife",
                isMatch: () => (/\/perks\/goodlife/).test(window.location.pathname),
                interaction: {name: "View Goodlife Gyms"}
            },
            {
                name: "perks",
                isMatch: () => (/^\/perks$/).test(window.location.pathname),
                interaction: {name: "View perks"}
            },
            
            {
                name: "phi",
                isMatch: () => (/\/starter-silver$/).test(window.location.pathname),
                interaction: {name: "View Item Hospital"}
            },
            {
                name: "phi",
                isMatch: () => (/\/extras-cover\/black-70-extras/).test(window.location.pathname),
                interaction: {name: "View Item Extras"}
            },
            {
                name: "category",
                isMatch: () => (/\/health-insurance$/).test(window.location.pathname),
                interaction: {name: "View Health Insurance"}
            }
            ,
            {
                name: "category",
                isMatch: () => (/\/travel-insurance$/).test(window.location.pathname),
                interaction: {name: "View Travel Insurance"}
            },
            {
                name: "category",
                isMatch: () => (/\/car-insurance$/).test(window.location.pathname),
                interaction: {name: "View Car Insurance"}
            }
            ,
            {
                name: "category",
                isMatch: () => (/\/home-insurance$/).test(window.location.pathname),
                interaction: {name: "View Home Insurance"}
            }
            ,
            {
                name: "category",
                isMatch: () => (/\/life-insurance$/).test(window.location.pathname),
                interaction: {name: "View Life Insurance"}
            }
            
        ] 
    };

    SalesforceInteractions.initSitemap(sitemapConfig);
     // Listener to log all clicks for debugging and troubleshooting
    //test
    document.addEventListener("click", (e) => {
        console.log("CLICK: " + SalesforceInteractions.cashDom(e.target).text().toUpperCase());
    });
});