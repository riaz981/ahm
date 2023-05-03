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
                name: "View Homepage"
            }
        ] 
    };

    SalesforceInteractions.initSitemap(sitemapConfig);
     // Listener to log all clicks for debugging and troubleshooting

    document.addEventListener("click", (e) => {
        console.log("CLICK: " + SalesforceInteractions.cashDom(e.target).text().toUpperCase());
    });
});