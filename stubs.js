//Data Stub
function getGuideData(){
    return {
        "steps": [{
                "id": "1",
                "content": "tip on first div",
                "selector": "#id_1",
                "next": "2",
                "placement": "bottom"
            },{
                "id": "2",
                "content": "tip on second div",
                "selector": ".myClass2",
                "next": "3",
                "placement": "left"
            },{
                "id": "3",
                "content": "tip on third div.",
                "selector": "div:eq(2)",
                "next": null,
                "placement": "right"
            }]	
    }
}