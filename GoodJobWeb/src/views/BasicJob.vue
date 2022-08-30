<template>
    <div class="j_border row">
        <div class="col">
            <div class="marquee" style="font-size: 8rem;">
                <div class="marquee_group">
                    <p>Basic Job</p>
                    <p aria-hidden="true">Basic Job</p>
                    <p aria-hidden="true">Basic Job</p>
                </div>

                <div aria-hidden="true" class="marquee_group">
                    <p>Basic Job</p>
                    <p aria-hidden="true">Basic Job</p>
                    <p aria-hidden="true">Basic Job</p>
                </div>
            </div>
        </div>
    </div>
    <div class="j_border row text-center">
        <div class="col">
            <h1>Basic Job: $<span>price</span></h1>
        </div>
    </div>
    <!-- form -->
    <!-- Email -->
    <div class="j_border row">
        <div class="col p-1">
            <label class="form-label h2 p-xl-2">Email address</label>
            <input id="mail" type="email" class="form-control form-control-lg" placeholder="your@email.com">
        </div>
    </div>
    <!-- CompanyName -->
    <div class="j_border row">
        <div class="col p-1">
            <label class="form-label h2 p-xl-2">Company Name</label>
            <input id="companyName" type="text" class="form-control form-control-lg" placeholder="e.g. Your Company">
        </div>
    </div>
    <!-- Title -->
    <div class="j_border row">
        <div class="col p-1">
            <label class="form-label h2 p-xl-2">Title</label>
            <input id="title" type="text" class="form-control form-control-lg" placeholder="e.g. Directer">
        </div>
    </div>
    <!-- Type -->
    <div class="j_border row">
        <div class="col p-1">
            <label class="form-label h2 p-xl-2">Type</label>
            <div class="p-xl-2 col-3">
                <select id="type" multiple placeholder="Select Job Type">
                    <option value="Freelance">Freelance</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Internship">Internship</option>
                    <option value="Part-time">Part-time</option>
                </select>
            </div>
        </div>
    </div>
    <!-- Skill -->
    <div class="j_border row">
        <div class="col p-1">
            <label class="form-label h2 p-xl-2">Skill</label>
            <input id="skill" type="text" class="form-control form-control-lg" placeholder="e.g. Accounting">
        </div>
    </div>
    <!-- Level -->
    <div class="j_border row">
        <div class="col p-1">
            <label class="form-label h2 p-xl-2">Level</label>
            <div class="p-xl-2 col-3">
                <select id="level" multiple placeholder="Select Job Level">
                    <option value="Directer">Directer</option>
                    <option value="Intern">Intern</option>
                    <option value="Lead">Lead</option>
                    <option value="Manager">Manager</option>
                    <option value="Lead">Lead</option>
                    <option value="Senior">Senior</option>
                    <option value="Junior">Junior</option>
                </select>
            </div>
        </div>
    </div>
    <!-- Location -->
    <div class="j_border row">
        <div class="col p-1">
            <label class="form-label h2 p-xl-2">Location</label>
            <input id="location" type="text" class="form-control form-control-lg" placeholder="e.g. Job Location">
        </div>
    </div>
    <!-- Remote -->
    <div class="j_border row">
        <div class="col p-1">
            <label class="form-label h2 p-xl-2">Remote friendly</label>
            <div class="p-xl-2 p-lg-2 p-md-2 p-sm-2">
                <div class="form-check form-switch form-switch-lg">
                    <input id="isRemote" @click="selectRemote(this)" class="form-check-input" type="checkbox" value="0">
                </div>
            </div>
        </div>
    </div>
    <!-- Link -->
    <div class="j_border row">
        <div class="col p-1">
            <label class="form-label h2 p-xl-2">Link</label>
            <input id="link" type="text" class="form-control form-control-lg"
                placeholder="e.g. https://company.com/job">
        </div>
    </div>
    <div class="j_border row">
        <div class="d-grid gap-2 p-1">
            <button id="btnSubmit" @click="Submit" class="btn btn-dark" type="button">Post</button>
        </div>
    </div>
</template>

<script setup>
async function ValidateInput(paremeters) {
    var { mail, companyName, title, skill, location, isRemote, link } = paremeters;


    if (_.isEmpty(mail)) {
        swalTip("Warning", "Email is Required");
        return;
    }
    if (!ValidateEmail(mail)) {
        swalTip("Warning", "Email Format Error");
        return;
    }
    if (_.isEmpty(companyName)) {
        swalTip("Warning", "Company Name is Required");
        return;
    }
    if (_.isEmpty(title)) {
        swalTip("Warning", "Job Title is Required");
        return;
    }
    let type = GetSelectedOptionValue("type");
    if (_.isEmpty(type)) {
        swalTip("Warning", "Job Type is Required");
        return;
    }
    if (_.isEmpty(skill)) {
        swalTip("Warning", "Job Skill is Required");
        return;
    }
    let level = GetSelectedOptionValue("level");
    if (_.isEmpty(level)) {
        swalTip("Warning", "Job Level is Required");
        return;
    }
    if (_.isEmpty(location)) {
        swalTip("Warning", "Job Location is Required");
        return;
    }
    if (_.isEmpty(link)) {
        swalTip("Warning", "Link is Required");
        return;
    }
    if (!ValidateURL(link)) {
        swalTip("Warning", "Link is not an url");
        return;
    }

    return true;
}

/**
 * 是否為遠端 0:否 1:是
 * @param {*} chk 
 */
 const selectRemote = async () => {
    var chk = document.getElementById("isRemote");
    if (chk.checked)
        chk.value = 1;
    else
        chk.value = 0;
}

const Submit = async () => {
    var paremeters = GetAllInputValue();

    if (await ValidateInput(paremeters) == true) {
        // let url = location.protocol + '//' + location.host;
        // var apiUrl = url + "/jobpost/getCompanyPost";

        var { mail, companyName, title, skill, location, isRemote, link } = paremeters;
        var obj = {
            mail,
            companyName,
            title,
            type: GetSelectedOptionValue("type"),
            skill,
            level: GetSelectedOptionValue("level"),
            location,
            isRemote,
            link
        };

        console.log(obj);
        // var result = await httpPost("http://localhost:5173/jobpost/getCompanyPost", obj);
    }
}
</script>