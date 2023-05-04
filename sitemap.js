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
                // https://sales-staging.ahm.ninja/
                name: "home",
                isMatch: () => (/^\/$/).test(window.location.pathname),
                interaction: {name: "View Homepage"}
            },
            {
                //https://sales-staging.ahm.ninja/perks/specsavers
                name: "specsavers",
                isMatch: () => (/\/perks\/specsavers/).test(window.location.pathname),
                interaction: {name: "View Specsavers"}
            },
            {
                //https://sales-staging.ahm.ninja/perks/goodlife
                name: "goodlife",
                isMatch: () => (/\/perks\/goodlife/).test(window.location.pathname),
                interaction: {name: "View Goodlife Gyms"}
            },
            {
                //https://sales-staging.ahm.ninja/perks
                name: "perks",
                isMatch: () => (/^\/perks$/).test(window.location.pathname),
                interaction: {name: "View perks"}
            },
            
            {
                //https://sales-staging.ahm.ninja/health-insurance/hospital-cover/starter-silver
                name: "phi",
                isMatch: () => (/\/starter-silver$/).test(window.location.pathname),
                interaction: {name: "View Item Hospital"}
            },
            {
                //https://sales-staging.ahm.ninja/health-insurance/extras-cover/black-70-extras
                name: "phi",
                isMatch: () => (/\/extras-cover\/black-70-extras/).test(window.location.pathname),
                interaction: {name: "View Item Extras"}
            },
            {
                //https://sales-staging.ahm.ninja/health-insurance/hospital-extras-packages/classic-flexi-silver-plus
                name: "phi",
                isMatch: () => (/\/hospital-extras-packages\/classic-flexi-silver-plus/).test(window.location.pathname),
                interaction: {name: "View Item Package"}
            },
            {
                //https://sales-staging.ahm.ninja/health-insurance/hospital-extras-bundle/advanced-hospital-gold-super-extras
                name: "phi",
                isMatch: () => (/\/hospital-extras-bundle\/advanced-hospital-gold-super-extras/).test(window.location.pathname),
                interaction: {name: "View Item Combined"}
            },
            {
                //https://sales-staging.ahm.ninja/health-insurance
                name: "category",
                isMatch: () => (/\/health-insurance$/).test(window.location.pathname),
                interaction: {name: "View Health Insurance"}
            }
            ,
            {
                //https://sales-staging.ahm.ninja/travel-insurance
                name: "category",
                isMatch: () => (/\/travel-insurance$/).test(window.location.pathname),
                interaction: {name: "View Travel Insurance"}
            },
            {
                //https://sales-staging.ahm.ninja/car-insurance
                name: "category",
                isMatch: () => (/\/car-insurance$/).test(window.location.pathname),
                interaction: {name: "View Car Insurance"}
            }
            ,
            {
                //https://sales-staging.ahm.ninja/home-insurance
                name: "category",
                isMatch: () => (/\/home-insurance$/).test(window.location.pathname),
                interaction: {name: "View Home Insurance"}
            }
            ,
            {
                //https://sales-staging.ahm.ninja/life-insurance
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