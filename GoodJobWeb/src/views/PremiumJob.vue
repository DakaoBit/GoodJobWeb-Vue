<template>
    <div class="j_border row">
            <div class="col">
                <div class="marquee" style="font-size: 8rem;">
                    <div class="marquee_group">
                        <p>Premium Job</p>
                        <p aria-hidden="true">Premium Job</p>
                        <p aria-hidden="true">Premium Job</p>
                    </div>

                    <div aria-hidden="true" class="marquee_group">
                        <p>Premium Job</p>
                        <p aria-hidden="true">Premium Job</p>
                        <p aria-hidden="true">Premium Job</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="j_border row text-center">
            <div class="col">
                <h1>Premium Job: $<span>price</span></h1>
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
                <input id="companyName" type="text" class="form-control form-control-lg"
                    placeholder="e.g. Your Company">
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
        <!-- Description -->
        <div class="j_border row">
            <div class="col p-1">
                <label class="form-label h2 p-xl-2">Description (Max. 200 characters)</label>
                <textarea id="description" class="form-control form-control-lg" rows="3"
                    placeholder="e.g. Details about company, job purpose, key skills"></textarea>
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
            <button id="btnSubmit" @click="Submit" class="btn bg_premium" type="button">Post</button>
        </div>
    </div>
</template>

<script setup>
async function ValidateInput(paremeters) {
    var { mail, companyName, title, skill, location, isRemote, link } = paremeters;


    if (_.isEmpty(mail)) {
        swalPremium("Warning", "Email is Required");
        return;
    }
    if (!ValidateEmail(mail)) {
        swalPremium("Warning", "Email Format Error");
        return;
    }
    if (_.isEmpty(companyName)) {
        swalPremium("Warning", "Company Name is Required");
        return;
    }
    if (_.isEmpty(title)) {
        swalPremium("Warning", "Job Title is Required");
        return;
    }
    let type = GetSelectedOptionValue("type");
    if (_.isEmpty(type)) {
        swalPremium("Warning", "Job Type is Required");
        return;
    }
    if (_.isEmpty(skill)) {
        swalPremium("Warning", "Job Skill is Required");
        return;
    }
    let level = GetSelectedOptionValue("level");
    if (_.isEmpty(level)) {
        swalPremium("Warning", "Job Level is Required");
        return;
    }
    if (_.isEmpty(location)) {
        swalPremium("Warning", "Job Location is Required");
        return;
    }
    let description = document.getElementById("description").value;
            if (_.isEmpty(description)) {
                swalPremium("Warning", "Job Description is Required");
                return;
            }
            if (!ValidateLength(description, 10, 200)){
                swalPremium("Warning", "Job Description need 10 ~ 200 characters");
                return;
            }
    if (_.isEmpty(link)) {
        swalPremium("Warning", "Link is Required");
        return;
    }
    if (!ValidateURL(link)) {
        swalPremium("Warning", "Link is not an url");
        return;
    }

    return true;
}

/**
 * ??????????????? 0:??? 1:???
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