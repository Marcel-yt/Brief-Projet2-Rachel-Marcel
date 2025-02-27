document.addEventListener('DOMContentLoaded', function () {
    const profilInput = document.getElementById('profil');
    const nameInput = document.getElementById('name');
    const titreInput = document.getElementById('titre');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const addressInput = document.getElementById('address');
    const websiteInput = document.getElementById('website');
    const experienceInput = document.getElementById('experience');
    const addSkillButton = document.getElementById('addSkill');
    const skillsContainer = document.getElementById('skillsContainer');
    const addEducationButton = document.getElementById('addEducation');
    const educationContainer = document.getElementById('educationContainer');
    const addExperienceButton = document.getElementById('addExperience');
    const experienceContainer = document.getElementById('experienceContainer');
    // const downloadCVButton = document.getElementById('downloadCV');
    // const telecvElement = document.getElementById('telecv');
    

    const previewProfil = document.getElementById('previewProfil');
    const previewName = document.getElementById('previewName');
    const previewTitre = document.getElementById('previewTitre');
    const previewEmail = document.getElementById('previewEmail');
    const previewPhone = document.getElementById('previewPhone');
    const previewAddress = document.getElementById('previewAddress');
    const previewWebsite = document.getElementById('previewWebsite');
    const previewExperience = document.getElementById('previewExperience');
    const previewSkills = document.getElementById('previewSkills');
    const previewEducation = document.getElementById('previewEducation');
    const previewExperienceList = document.getElementById('previewExperienceList');
    
    
    // photo de profil
    profilInput.addEventListener('change', function () {
        const file = profilInput.files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
            previewProfil.src = e.target.result;
            localStorage.setItem('profil', e.target.result);
        };
        reader.readAsDataURL(file);
    });

    function updatePreview() {
        previewName.textContent = nameInput.value;
        previewTitre.textContent = titreInput.value;
        previewEmail.textContent = emailInput.value;
        previewPhone.textContent = phoneInput.value;
        previewAddress.textContent = addressInput.value;
        previewWebsite.textContent = websiteInput.value;
        previewExperience.textContent = experienceInput.value;

        const skills = [];
        document.querySelectorAll('.skill-item').forEach(skillItem => {
            const skillName = skillItem.querySelector('.skill-name').value;
            const skillLevel = skillItem.querySelector('.skill-level').value;
            if (skillName) {
                skills.push({ name: skillName, level: skillLevel });
            }
        });

        previewSkills.innerHTML = skills.map(skill => `
            <li class="flex items-center justify-between">
                <span>${skill.name}</span>
                <div class="w-2/3 bg-gray-200 rounded-full h-2.5 ml-4">
                    <div class="bg-blue-600 h-2.5 rounded-full" style="width: ${skill.level}%;"></div>
                </div>
            </li>
        `).join('');

        const education = [];
        document.querySelectorAll('.education-item').forEach(educationItem => {
            const educationName = educationItem.querySelector('.education-name').value;
            const educationPeriod = educationItem.querySelector('.education-period').value;
            const educationDescription = educationItem.querySelector('.education-description').value;
            if (educationName) {
                education.push({ name: educationName, period: educationPeriod, description: educationDescription });
            }
        });

        previewEducation.innerHTML = education.map(edu => `
            <li class="mb-2">
                <span class="font-bold">${edu.name}</span> / ${edu.period}
                <p class="text-sm mt-1">${edu.description}</p>
            </li>
        `).join('');

        const experiences = [];
        document.querySelectorAll('.experience-item').forEach(experienceItem => {
            const experienceName = experienceItem.querySelector('.experience-name').value;
            const experiencePeriod = experienceItem.querySelector('.experience-period').value;
            const experienceDescription = experienceItem.querySelector('.experience-description').value;
            if (experienceName) {
                experiences.push({ name: experienceName, period: experiencePeriod, description: experienceDescription });
            }
        });

        previewExperienceList.innerHTML = experiences.map(exp => `
            <li class="mb-2">
                <span class="font-bold">${exp.name}</span> / ${exp.period}
                <p class="text-sm mt-1">${exp.description}</p>
            </li>
        `).join('');

    }

    

    function saveToLocalStorage() {
        localStorage.setItem('name', nameInput.value);
        localStorage.setItem('titre', titreInput.value);
        localStorage.setItem('email', emailInput.value);
        localStorage.setItem('phone', phoneInput.value);
        localStorage.setItem('address', addressInput.value);
        localStorage.setItem('website', websiteInput.value);
        localStorage.setItem('experience', experienceInput.value);
        
        const skills = [];
        document.querySelectorAll('.skill-item').forEach(skillItem => {
            const skillName = skillItem.querySelector('.skill-name').value;
            const skillLevel = skillItem.querySelector('.skill-level').value;
            if (skillName) {
                skills.push({ name: skillName, level: skillLevel });
            }
        });
        localStorage.setItem('skills', JSON.stringify(skills));

        const education = [];
        document.querySelectorAll('.education-item').forEach(educationItem => {
            const educationName = educationItem.querySelector('.education-name').value;
            const educationPeriod = educationItem.querySelector('.education-period').value;
            const educationDescription = educationItem.querySelector('.education-description').value;
            if (educationName) {
                education.push({ name: educationName, period: educationPeriod, description: educationDescription });
            }
        });
        localStorage.setItem('education', JSON.stringify(education));

        const experiences = [];
        document.querySelectorAll('.experience-item').forEach(experienceItem => {
            const experienceName = experienceItem.querySelector('.experience-name').value;
            const experiencePeriod = experienceItem.querySelector('.experience-period').value;
            const experienceDescription = experienceItem.querySelector('.experience-description').value;
            if (experienceName) {
                experiences.push({ name: experienceName, period: experiencePeriod, description: experienceDescription });
            }
        });
        localStorage.setItem('experiences', JSON.stringify(experiences));
    }

    function loadFromLocalStorage() {
        nameInput.value = localStorage.getItem('name') || '';
        titreInput.value = localStorage.getItem('titre') || '';
        emailInput.value = localStorage.getItem('email') || '';
        phoneInput.value = localStorage.getItem('phone') || '';
        addressInput.value = localStorage.getItem('address') || '';
        websiteInput.value = localStorage.getItem('website') || '';
        experienceInput.value = localStorage.getItem('experience') || '';
        previewProfil.src = localStorage.getItem('profil') || '';

        const skills = JSON.parse(localStorage.getItem('skills')) || [];
        skillsContainer.innerHTML = skills.map(skill => `
            <div class="skill-item mb-3">
                <label class="block text-sm font-semibold">Compétence :</label>
                <input type="text" class="skill-name w-full p-2 border rounded mb-2" value="${skill.name}">
                <label class="block text-sm font-semibold">Niveau :</label>
                <input type="range" class="skill-level w-full" min="0" max="100" value="${skill.level}">
            </div>
        `).join('');

        const education = JSON.parse(localStorage.getItem('education')) || [];
        educationContainer.innerHTML = education.map(edu => `
            <div class="education-item mb-3">
                <label class="block text-sm font-semibold">École :</label>
                <input type="text" class="education-name w-full p-2 border rounded mb-2" value="${edu.name}">
                <label class="block text-sm font-semibold">Période :</label>
                <input type="text" class="education-period w-full p-2 border rounded mb-2" value="${edu.period}">
                <label class="block text-sm font-semibold">Description :</label>
                <textarea class="education-description w-full p-2 border rounded mb-2">${edu.description}</textarea>
            </div>
        `).join('');

        const experiences = JSON.parse(localStorage.getItem('experiences')) || [];
        experienceContainer.innerHTML = experiences.map(exp => `
            <div class="experience-item mb-3">
                <label class="block text-sm font-semibold">Entreprise :</label>
                <input type="text" class="experience-name w-full p-2 border rounded mb-2" value="${exp.name}">
                <label class="block text-sm font-semibold">Période :</label>
                <input type="text" class="experience-period w-full p-2 border rounded mb-2" value="${exp.period}">
                <label class="block text-sm font-semibold">Description :</label>
                <textarea class="experience-description w-full p-2 border rounded mb-2">${exp.description}</textarea>
            </div>
        `).join('');

        updatePreview();
    }


    addSkillButton.addEventListener('click', () => {
        const skillItem = document.createElement('div');
        skillItem.classList.add('skill-item', 'mb-3');
        skillItem.innerHTML = `
            <label class="block text-sm font-semibold">Compétence :</label>
            <input type="text" class="skill-name w-full p-2 border rounded mb-2" placeholder="Ex: HTML, CSS, JavaScript">
            <label class="block text-sm font-semibold">Niveau :</label>
            <input type="range" class="skill-level w-full" min="0" max="100" value="50">
        `;
        skillsContainer.appendChild(skillItem);
    });

    addEducationButton.addEventListener('click', () => {
        const educationItem = document.createElement('div');
        educationItem.classList.add('education-item', 'mb-3');
        educationItem.innerHTML = `
            <label class="block text-sm font-semibold">École :</label>
            <input type="text" class="education-name w-full p-2 border rounded mb-2" placeholder="Nom de l'école">
            <label class="block text-sm font-semibold">Période :</label>
            <input type="text" class="education-period w-full p-2 border rounded mb-2" placeholder="2000-2005">
            <label class="block text-sm font-semibold">Description :</label>
            <textarea class="education-description w-full p-2 border rounded mb-2" placeholder="Description"></textarea>
        `;
        educationContainer.appendChild(educationItem);
    });

    addExperienceButton.addEventListener('click', () => {
        const experienceItem = document.createElement('div');
        experienceItem.classList.add('experience-item', 'mb-3');
        experienceItem.innerHTML = `
            <label class="block text-sm font-semibold">Entreprise :</label>
            <input type="text" class="experience-name w-full p-2 border rounded mb-2" placeholder="Nom de l'entreprise">
            <label class="block text-sm font-semibold">Période :</label>
            <input type="text" class="experience-period w-full p-2 border rounded mb-2" placeholder="2010-2012">
            <label class="block text-sm font-semibold">Description :</label>
            <textarea class="experience-description w-full p-2 border rounded mb-2" placeholder="Description"></textarea>
        `;
        experienceContainer.appendChild(experienceItem);
    });

    document.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('input', () => {
            updatePreview();
            saveToLocalStorage();
        });
    });

    nameInput.addEventListener('input', () => {
        updatePreview();
        saveToLocalStorage();
    });

    titreInput.addEventListener('input', () => {
        updatePreview();
        saveToLocalStorage();
    });

    emailInput.addEventListener('input', () => {
        updatePreview();
        saveToLocalStorage();
    });

    phoneInput.addEventListener('input', () => {
        updatePreview();
        saveToLocalStorage();
    });

    addressInput.addEventListener('input', () => {
        updatePreview();
        saveToLocalStorage();
    });

    websiteInput.addEventListener('input', () => {
        updatePreview();
        saveToLocalStorage();
    });

    experienceInput.addEventListener('input', () => {
        updatePreview();
        saveToLocalStorage();
    });

    skillsInput.addEventListener('input', () => {
        updatePreview();
        saveToLocalStorage();
    });


    loadFromLocalStorage();
    
});