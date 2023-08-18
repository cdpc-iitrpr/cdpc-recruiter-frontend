const DJANGO_SERVER = "http://172.30.8.217:7000";
const INF_FORM_ACTION = DJANGO_SERVER + "/api/recruiterSubmitINF/"
const JAF_SUBMIT_ACTION = DJANGO_SERVER + "/api/recruiterSubmitJAF/"
const JAF_FETCH_DRAFTS = DJANGO_SERVER + "/api/recruiterJAF/"
const INF_FETCH_DRAFTS = DJANGO_SERVER + "/api/recruiterINF/"
const JAF_SPOC_FETCH = DJANGO_SERVER + "/api/spocJAF/"
const INF_SPOC_FETCH = DJANGO_SERVER + "/api/spocINF/"
const FILE_UPLOAD = DJANGO_SERVER + "/api/jdFileUpload/"
const FILE_DOWNLOAD = DJANGO_SERVER + "/api/jdFileDownload/"

export { 
    DJANGO_SERVER, 
    INF_FORM_ACTION,
    JAF_SUBMIT_ACTION,
    JAF_FETCH_DRAFTS,
    INF_FETCH_DRAFTS,
    JAF_SPOC_FETCH,
    INF_SPOC_FETCH,
    FILE_UPLOAD,
    FILE_DOWNLOAD
};
