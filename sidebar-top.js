const sidebarTop = (frameworkImage, versions, currentVersion) => {
    const versionsList = () => {
        let versionListHTML = ''
    
        for (const key in versions) {
            if (versions[key].label === currentVersion) {
            versionListHTML += `
                <li>
                    <a class="dropdown__link dropdown__link--active" href="${versions[key].link}">${versions[key].label}</a>
                </li>
            `
            } else {
            versionListHTML += `
                <li>
                    <a class="dropdown__link" href="${versions[key].link}">${versions[key].label}</a>
                </li>
            `
            }
        }
    
        return versionListHTML
    }
  
    return `
        <div class="sidebar-top">
            <div class="sidebar-top-image">
                <img alt="React" src="${frameworkImage}" width="24" height="24" decoding="async" data-nimg="1" loading="lazy"/>
            </div>
            <div class="dropdown dropdown--hoverable">
                <a aria-current="page" class="navbar__link active" aria-haspopup="true" aria-expanded="false" role="button">${currentVersion}</a>
                <ul class="dropdown__menu">${(versionsList)()}</ul>
            </div>
        </div>
  
        <hr class="sidebar-hr"/>
    `
}

module.exports = { sidebarTop };