"use strict";

(function () {
  var langSufix = function langSufix(lang) {
    return lang ? "_".concat(lang) : '';
  };

  var sponsorBarTemplate = function sponsorBarTemplate(lang) {
    return "\n        <div class=\"container p-0\">\n            <div class=\"row my-4 py-4\">\n                <div class=\"col-12 col-md-6\">\n                    <h5 class=\"text-uppercase text-center fw-normal\">\n                        <p class=\"mb-4\">".concat(lang ? 'CO-ORGANIZER' : 'CORREALIZAÇÃO', "</p>\n                        <span class=\"d-block horizontal-divider mx-5\"></span>\n                    </h5>\n                    <div class=\"row row-cols-2 row-cols-lg-2 align-items-center g-2 align-items-center align-items-center py-5\">\n                        <a href=\"http://www.portaldaindustria.com.br/iel/\" class=\"realizadores-item\">\n                            <img src=\"/assets/dist/images/patrocinadores/realizacao/IEL").concat(langSufix(lang), ".png\" alt=\"IEL\">\n                        </a>\n                        <a href=\"http://www.portaldaindustria.com.br/sesi/\" class=\"realizadores-item\">\n                            <img src=\"/assets/dist/images/patrocinadores/realizacao/SESI_SENAI").concat(langSufix(lang), ".png\" alt=\"SESI e SENAI\">\n                        </a>\n                    </div>\n                </div>\n                <div class=\"col-12 col-md-6\">\n                    <h5 class=\"text-uppercase text-center fw-normal\">\n                        <p class=\"mb-4\">").concat(lang ? 'ORGANIZER' : 'REALIZAÇÃO', "</p>\n                        <span class=\"d-block horizontal-divider mx-5\"></span>\n                    </h5>\n                    <div class=\"row row-cols-1 row-cols-lg-2 align-items-center g-2 align-items-center align-items-center py-5\">\n                        <a href=\"https://www.sebrae.com.br/\" class=\"realizadores-item\">\n                            <img src=\"/assets/dist/images/patrocinadores/realizacao/SEBRAE").concat(langSufix(lang), ".png\" alt=\"SEBRAE\">\n                        </a>\n                        <a href=\"http://www.portaldaindustria.com.br/cni/\" class=\"realizadores-item\">\n                            <img src=\"/assets/dist/images/patrocinadores/realizacao/CNI").concat(langSufix(lang), ".png\" alt=\"CNI\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row my-4 py-4\">\n                <div class=\"col-12 col-md-4\">\n                    <h5 class=\"text-uppercase text-center fw-normal\">\n                        <p class=\"mb-4\">").concat(lang ? 'gold sponsor' : 'patrocinador ouro', "</p>\n                        <span class=\"d-block horizontal-divider mx-5\"></span>\n                    </h5>\n                    <div class=\"row row-cols-2 row-cols-lg-2 align-items-center g-2 align-items-center align-items-center py-5\">\n                        <a href=\"https://embrapii.org.br\" class=\"realizadores-item\">\n                            <img src=\"/assets/dist/images/patrocinadores/ouro/EMBRAPI").concat(langSufix(lang), ".png\" alt=\"EMBRAPI\">\n                        </a>\n                        <a href=\"https://br.fi-group.com/\" class=\"realizadores-item\">\n                            <img src=\"/assets/dist/images/patrocinadores/ouro/FIGROUP").concat(langSufix(lang), ".png\" alt=\"FIGROUP\">\n                        </a>\n                    </div>\n                </div>\n                <div class=\"col-12 col-md-4\">\n                    <h5 class=\"text-uppercase text-center fw-normal\">\n                        <p class=\"mb-4\">").concat(lang ? 'master sponsor' : 'patrocinador master', "</p>\n                        <span class=\"d-block horizontal-divider mx-5\"></span>\n                    </h5>\n                    <div class=\"row row-cols-1 row-cols-lg-1 align-items-center g-2 align-items-center align-items-center py-5\">\n                        <a href=\"https://www.roche.com.br/\" class=\"realizadores-item\">\n                            <img src=\"/assets/dist/images/patrocinadores/master/ROCHE").concat(langSufix(lang), ".png\" alt=\"ROCHE\">\n                        </a>\n                    </div>\n                </div>\n                <div class=\"col-12 col-md-4\">\n                    <h5 class=\"text-uppercase text-center fw-normal\">\n                        <p class=\"mb-4\">").concat(lang ? 'diamond sponsor' : 'patrocinador diamante', "</p>\n                        <span class=\"d-block horizontal-divider mx-5\"></span>\n                    </h5>\n                    <div class=\"row row-cols-1 row-cols-lg-1 align-items-center g-2 align-items-center align-items-center py-5\">\n\n                        <a href=\"http://www.finep.gov.br/\" class=\"realizadores-item\">\n                            <img src=\"/assets/dist/images/patrocinadores/diamante/FINEP+MCTI+GF").concat(langSufix(lang), ".png\" alt=\"FINEP, MCTI e GF\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row my-4 py-4\">\n                <div class=\"col-12 col-md-6\">\n                    <h5 class=\"text-uppercase text-center fw-normal\">\n                        <p class=\"mb-4\">").concat(lang ? 'silver sponsor' : 'patrocinador prata', "</p>\n                        <span class=\"d-block horizontal-divider mx-5\"></span>\n                    </h5>\n                    <div class=\"row row-cols-2 row-cols-lg-3 align-items-center g-2 align-items-center align-items-center py-5\">\n                        <a href=\"https://www.cba.com.br/cba/\" class=\"realizadores-item\">\n                            <img src=\"/assets/dist/images/patrocinadores/prata/CBA").concat(langSufix(lang), ".png\" alt=\"CBA\">\n                        </a>\n                        <a href=\"https://www.gm.com/\" class=\"realizadores-item\">\n                            <img src=\"/assets/dist/images/patrocinadores/prata/GM").concat(langSufix(lang), ".png\" alt=\"GM\">\n                        </a>\n                        <a href=\"http://tuzzi.com.br/\" class=\"realizadores-item\">\n                            <img src=\"/assets/dist/images/patrocinadores/prata/TUZZI").concat(langSufix(lang), ".png\" alt=\"TUZZI\">\n                        </a>\n                    </div>\n                </div>\n                <div class=\"col-12 col-md-6\">\n                    <h5 class=\"text-uppercase text-center fw-normal\">\n                        <p class=\"mb-4\">").concat(lang ? 'bronze sponsor' : 'patrocinador bronze', "</p>\n                        <span class=\"d-block horizontal-divider mx-5\"></span>\n                    </h5>\n                    <div class=\"row row-cols-1 row-cols-lg-2 align-items-center g-2 align-items-center align-items-center py-5\">\n                        <a href=\"https://www.braskem.com.br/\" class=\"realizadores-item\">\n                            <img src=\"/assets/dist/images/patrocinadores/bronze/BRASKEM").concat(langSufix(lang), ".png\" alt=\"BRASKEM\">\n                        </a>\n                        <a href=\"https://www.suzano.com.br/\" class=\"realizadores-item\">\n                            <img src=\"/assets/dist/images/patrocinadores/bronze/SUZANO").concat(langSufix(lang), ".png\" alt=\"SUZANO\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row my-4 py-4\">\n                <div class=\"col-12 col-md-12\">\n                    <h5 class=\"text-uppercase text-center fw-normal\">\n                        <p class=\"mb-4\">").concat(lang ? 'support sponsor' : 'patrocinador apoio', "</p>\n                        <span class=\"d-block horizontal-divider mx-5\"></span>\n                    </h5>\n                    <div class=\"row row-cols-2 row-cols-lg-4 align-items-center g-2 align-items-center align-items-center py-5\">\n                        <a href=\"https://www.basf.com/br/pt.html\" class=\"realizadores-item\">\n                            <img src=\"/assets/dist/images/patrocinadores/apoio/BASF").concat(langSufix(lang), ".png\" alt=\"BASF\">\n                        </a>\n                        <a href=\"https://www.iadb.org/\" class=\"realizadores-item\">\n                            <img src=\"/assets/dist/images/patrocinadores/apoio/BID").concat(langSufix(lang), ".png\" alt=\"BID\">\n                        </a>\n                        <a href=\"https://www.cgee.org.br/\" class=\"realizadores-item\">\n                            <img src=\"/assets/dist/images/patrocinadores/apoio/CGEE").concat(langSufix(lang), ".png\" alt=\"CGEE\">\n                        </a>\n                        <a href=\"https://new.siemens.com/br\" class=\"realizadores-item\">\n                            <img src=\"/assets/dist/images/patrocinadores/apoio/SIEMENS").concat(langSufix(lang), ".png\" alt=\"SIEMENS").concat(langSufix(lang), ".png\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ");
  };

  var $barraRealizacao = document.getElementById("barra-realizacao");
  $barraRealizacao && $barraRealizacao.insertAdjacentHTML('afterbegin', sponsorBarTemplate($barraRealizacao.dataset.lang));
})();