// Change the name of the file to something less generic
const service_url = 'https://hackaton-open-source.herokuapp.com/api/projects';

function getAllUsersFiltered(query) {
    $.ajax({
        url: service_url + query,
        type: 'GET',
        success: function (projects) {
            recreateUsersTable(projects);
        }
    });
}

(function userOperationsListeners() {
    $("#show-button").click(() =>{
        console.log("ok");
        const queryExprience = $("#YourExprience").val();
        const queryProgrammingLevel = $("#ProgrammingLevel").val();
        const queryProgrammingSide = $('#ProgrammingSide').val();
        const query = `?${queryExprience}=${queryProgrammingLevel}=${queryProgrammingSide}`;
        getAllUsersFiltered(query);    

    });

}())



function recreateUsersTable(projects) {
    let col = [];
    for (let i = 0; i < projects.length; i++) {
        for (let key in projects[i]) {
            if (col.indexOf(key) === -1) {

                col.push(key);
            }
        }
    }

    col.splice(9, 1);
    col.splice(0, 1);

    // CREATE DYNAMIC TABLE.
    let table = document.createElement("table");

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
    let tr = table.insertRow(-1);// TABLE ROW.
    console.log(tr);

    for (let i = 0; i < col.length; i++) {
        if (i == 6)
            continue;
        let th = document.createElement("th");// TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (let i = 0; i < projects.length; i++) {
        tr = table.insertRow(-1);
        //each user gets colored font accordingly to his color, hides the col of the color.
        tr.style.color = projects[i]['color'];

        for (let j = 0; j < col.length; j++) {
            if (j == 6)
                continue;

            let tabCell = tr.insertCell(-1);
            if (j == 5) {
                //Showing avatar as backgroundimage in the table cell
                tabCell.style.backgroundImage = `url(${users[i][col[j]]})`
                continue;
            }
            tabCell.innerHTML = projects[i][col[j]];
        }
    }
    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    const divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}


