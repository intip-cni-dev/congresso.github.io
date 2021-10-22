(() => {
    const langSufix = (lang) => lang ? `_${lang}` : '';
    const sponsorBarTemplate = (lang) => `
        <div class="container p-0">
            <div class="row my-4 py-4">
                <div class="col-12 col-md-6">
                    <h5 class="text-uppercase text-center fw-normal">
                        <p class="mb-4">${lang ? 'CO-ORGANIZER' : 'CORREALIZAÇÃO'}</p>
                        <span class="d-block horizontal-divider mx-5"></span>
                    </h5>
                    <div class="row row-cols-2 row-cols-lg-2 align-items-center g-2 align-items-center align-items-center py-5">
                        <a href="http://www.portaldaindustria.com.br/iel/" class="realizadores-item">
                            <img src="/assets/dist/images/patrocinadores/realizacao/IEL${langSufix(lang)}.png" alt="IEL">
                        </a>
                        <a href="http://www.portaldaindustria.com.br/sesi/" class="realizadores-item">
                            <img src="/assets/dist/images/patrocinadores/realizacao/SESI_SENAI${langSufix(lang)}.png" alt="SESI e SENAI">
                        </a>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <h5 class="text-uppercase text-center fw-normal">
                        <p class="mb-4">${lang ? 'ORGANIZER' : 'REALIZAÇÃO'}</p>
                        <span class="d-block horizontal-divider mx-5"></span>
                    </h5>
                    <div class="row row-cols-1 row-cols-lg-2 align-items-center g-2 align-items-center align-items-center py-5">
                        <a href="https://www.sebrae.com.br/" class="realizadores-item">
                            <img src="/assets/dist/images/patrocinadores/realizacao/SEBRAE${langSufix(lang)}.png" alt="SEBRAE">
                        </a>
                        <a href="http://www.portaldaindustria.com.br/cni/" class="realizadores-item">
                            <img src="/assets/dist/images/patrocinadores/realizacao/CNI${langSufix(lang)}.png" alt="CNI">
                        </a>
                    </div>
                </div>
            </div>
            <div class="row my-4 py-4">
                <div class="col-12 col-md-4">
                    <h5 class="text-uppercase text-center fw-normal">
                        <p class="mb-4">${lang ? 'gold sponsor' : 'patrocinador ouro'}</p>
                        <span class="d-block horizontal-divider mx-5"></span>
                    </h5>
                    <div class="row row-cols-2 row-cols-lg-2 align-items-center g-2 align-items-center align-items-center py-5">
                        <a href="https://embrapii.org.br" class="realizadores-item">
                            <img src="/assets/dist/images/patrocinadores/ouro/EMBRAPI${langSufix(lang)}.png" alt="EMBRAPI">
                        </a>
                        <a href="https://br.fi-group.com/" class="realizadores-item">
                            <img src="/assets/dist/images/patrocinadores/ouro/FIGROUP${langSufix(lang)}.png" alt="FIGROUP">
                        </a>
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <h5 class="text-uppercase text-center fw-normal">
                        <p class="mb-4">${lang ? 'master sponsor' : 'patrocinador master'}</p>
                        <span class="d-block horizontal-divider mx-5"></span>
                    </h5>
                    <div class="row row-cols-1 row-cols-lg-1 align-items-center g-2 align-items-center align-items-center py-5">
                        <a href="https://www.roche.com.br/" class="realizadores-item">
                            <img src="/assets/dist/images/patrocinadores/master/ROCHE${langSufix(lang)}.png" alt="ROCHE">
                        </a>
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <h5 class="text-uppercase text-center fw-normal">
                        <p class="mb-4">${lang ? 'diamond sponsor' : 'patrocinador diamante'}</p>
                        <span class="d-block horizontal-divider mx-5"></span>
                    </h5>
                    <div class="row row-cols-1 row-cols-lg-1 align-items-center g-2 align-items-center align-items-center py-5">

                        <a href="http://www.finep.gov.br/" class="realizadores-item">
                            <img src="/assets/dist/images/patrocinadores/diamante/FINEP+MCTI+GF${langSufix(lang)}.png" alt="FINEP, MCTI e GF">
                        </a>
                    </div>
                </div>
            </div>
            <div class="row my-4 py-4">
                <div class="col-12 col-md-6">
                    <h5 class="text-uppercase text-center fw-normal">
                        <p class="mb-4">${lang ? 'silver sponsor' : 'patrocinador prata'}</p>
                        <span class="d-block horizontal-divider mx-5"></span>
                    </h5>
                    <div class="row row-cols-2 row-cols-lg-3 align-items-center g-2 align-items-center align-items-center py-5">
                        <a href="https://www.cba.com.br/cba/" class="realizadores-item">
                            <img src="/assets/dist/images/patrocinadores/prata/CBA${langSufix(lang)}.png" alt="CBA">
                        </a>
                        <a href="https://www.gm.com/" class="realizadores-item">
                            <img src="/assets/dist/images/patrocinadores/prata/GM${langSufix(lang)}.png" alt="GM">
                        </a>
                        <a href="http://tuzzi.com.br/" class="realizadores-item">
                            <img src="/assets/dist/images/patrocinadores/prata/TUZZI${langSufix(lang)}.png" alt="TUZZI">
                        </a>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <h5 class="text-uppercase text-center fw-normal">
                        <p class="mb-4">${lang ? 'bronze sponsor' : 'patrocinador bronze'}</p>
                        <span class="d-block horizontal-divider mx-5"></span>
                    </h5>
                    <div class="row row-cols-1 row-cols-lg-2 align-items-center g-2 align-items-center align-items-center py-5">
                        <a href="https://www.braskem.com.br/" class="realizadores-item">
                            <img src="/assets/dist/images/patrocinadores/bronze/BRASKEM${langSufix(lang)}.png" alt="BRASKEM">
                        </a>
                        <a href="https://www.suzano.com.br/" class="realizadores-item">
                            <img src="/assets/dist/images/patrocinadores/bronze/SUZANO${langSufix(lang)}.png" alt="SUZANO">
                        </a>
                    </div>
                </div>
            </div>
            <div class="row my-4 py-4">
                <div class="col-12 col-md-12">
                    <h5 class="text-uppercase text-center fw-normal">
                        <p class="mb-4">${lang ? 'support sponsor' : 'patrocinador apoio'}</p>
                        <span class="d-block horizontal-divider mx-5"></span>
                    </h5>
                    <div class="row row-cols-2 row-cols-lg-4 align-items-center g-2 align-items-center align-items-center py-5">
                        <a href="https://www.basf.com/br/pt.html" class="realizadores-item">
                            <img src="/assets/dist/images/patrocinadores/apoio/BASF${langSufix(lang)}.png" alt="BASF">
                        </a>
                        <a href="https://www.iadb.org/" class="realizadores-item">
                            <img src="/assets/dist/images/patrocinadores/apoio/BID${langSufix(lang)}.png" alt="BID">
                        </a>
                        <a href="https://www.cgee.org.br/" class="realizadores-item">
                            <img src="/assets/dist/images/patrocinadores/apoio/CGEE${langSufix(lang)}.png" alt="CGEE">
                        </a>
                        <a href="https://new.siemens.com/br" class="realizadores-item">
                            <img src="/assets/dist/images/patrocinadores/apoio/SIEMENS${langSufix(lang)}.png" alt="SIEMENS${langSufix(lang)}.png">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;

    const $barraRealizacao = document.getElementById("barra-realizacao");

    if ($barraRealizacao) {
        const lang = $barraRealizacao.dataset.lang ? $barraRealizacao.dataset.lang.trim() : '';
        $barraRealizacao && $barraRealizacao.insertAdjacentHTML('afterbegin', sponsorBarTemplate(lang));
    }
})();