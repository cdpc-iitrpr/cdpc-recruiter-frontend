import { blank_jaf_object } from "../constants/formObjects";

const blank_back_end_object = {
    organisation_name: "",
    organisation_postal_address: "",
    organisation_website: "",
    organisation_type_options: "",
    organisation_type_others: "",
    industry_sector_options: "",
    industry_sector_others: "",
    job_profile_designation: "",
    job_profile_job_description: "",
    job_profile_job_description_pdf: "",
    job_profile_place_of_posting: "",
    contact_details_head_hr: {
        name: "",
        email: "",
        mobile: "",
        phone: "",
    },
    contact_details_first_person_of_contact: {
        name: "",
        email: "",
        mobile: "",
        phone: "",
    },
    contact_details_second_person_of_contact: {
        name: "",
        email: "",
        mobile: "",
        phone: "",
    },
    salary_details_b_tech: {
        ctc_gross: "",
        ctc_take_home: "",
        ctc_bonus_perks: "",
        bond_contract: "",
    },
    salary_details_m_tech: {
        ctc_gross: "",
        ctc_take_home: "",
        ctc_bonus_perks: "",
        bond_contract: "",
    },
    salary_details_m_sc: {
        ctc_gross: "",
        ctc_take_home: "",
        ctc_bonus_perks: "",
        bond_contract: "",
    },
    salary_details_phd: {
        ctc_gross: "",
        ctc_take_home: "",
        ctc_bonus_perks: "",
        bond_contract: "",
    },
    selection_process: {
        eligibility_criteria: "",
        allow_backlog_students: false,
        test_type: {
            ppt: false,
            shortlist_from_resume: false,
            written_test: false,
            online_test: false,
            technical_test: false,
            aptitiude_test: false,
            psychometric_test: false,
            group_discussion: false,
            personal_interview: false,
        },
        test_duration: "",
        likely_topics: "",
        number_of_rounds: 0,
        group_discussion_duration: "",
        number_of_offers: number,
        preferred_period: "",
        logistics_requirements: "",
        interested_discipline: [
            {
                degree: "",
                branches: [], //
            },
        ],
    },
};

const frontToBack = (frontEndFormObject) => {
    let parsed_object = blank_back_end_object;
    parsed_object.organisation_name =
        frontEndFormObject.about_organisation.organisation;
    parsed_object.organisation_postal_address =
        frontEndFormObject.about_organisation.postal_address;
    parsed_object.organisation_website =
        frontEndFormObject.about_organisation.website;
    parsed_object.organisation_type_options =
        frontEndFormObject.organisation_type.options;
    parsed_object.organisation_type_others =
        frontEndFormObject.organisation_type.others;
    parsed_object.industry_sector_options =
        frontEndFormObject.industry_sector.options;
    parsed_object.industry_sector_others =
        frontEndFormObject.industry_sector.others;
    parsed_object.contact_details_head_hr =
        frontEndFormObject.contact_details.head_hr;
    parsed_object.contact_details_first_person_of_contact =
        frontEndFormObject.contact_details.first_person_of_contact;
    parsed_object.contact_details_second_person_of_contact =
        frontEndFormObject.contact_details.second_person_of_contact;
    parsed_object.job_profile_designation =
        frontEndFormObject.job_profile.designation;
    parsed_object.job_profile_job_description =
        frontEndFormObject.job_profile.job_description;
    parsed_object.job_profile_job_description_pdf =
        frontEndFormObject.job_profile.job_description_pdf;
    parsed_object.job_profile_place_of_posting =
        frontEndFormObject.job_profile.place_of_posting;
    parsed_object.salary_details_b_tech =
        frontEndFormObject.salary_details.b_tech;
    parsed_object.salary_details_m_tech =
        frontEndFormObject.salary_details.m_tech;
    parsed_object.salary_details_m_sc =
        frontEndFormObject.salary_details.m_sc;
    parsed_object.salary_details_phd =
        frontEndFormObject.salary_details.phd;
    parsed_object.selection_process =
        frontEndFormObject.selection_process;
    return parsed_object;
};

const backToFront = (backEndFormObject) => {
    let parsed_object = blank_jaf
_object;
    parsed_object.about_organisation.organisation =
        backEndFormObject.organisation_name;
    parsed_object.about_organisation.postal_address =
        backEndFormObject.organisation_postal_address;
    parsed_object.about_organisation.website =
        backEndFormObject.organisation_website;
    parsed_object.organisation_type.options =
        backEndFormObject.organisation_type_options;
    parsed_object.organisation_type.others =
        backEndFormObject.organisation_type_others;
    parsed_object.industry_sector.options =
        backEndFormObject.industry_sector_options;
    parsed_object.industry_sector.others =
        backEndFormObject.industry_sector_others;
    parsed_object.contact_details.head_hr =
        backEndFormObject.contact_details_head_hr;
    parsed_object.contact_details.first_person_of_contact =
        backEndFormObject.contact_details_first_person_of_contact;
    parsed_object.contact_details.second_person_of_contact =
        backEndFormObject.contact_details_second_person_of_contact;
    parsed_object.job_profile.designation =
        backEndFormObject.job_profile_designation;
    parsed_object.job_profile.job_description =
        backEndFormObject.job_profile_job_description;
    parsed_object.job_profile.job_description_pdf =
        backEndFormObject.job_profile_job_description_pdf;
    parsed_object.job_profile.place_of_posting =
        backEndFormObject.job_profile_place_of_posting;
    parsed_object.salary_details.b_tech =
        backEndFormObject.salary_details_b_tech;
    parsed_object.salary_details.m_tech =
        backEndFormObject.salary_details_m_tech;
    parsed_object.salary_details.m_sc =
        backEndFormObject.salary_details_m_sc;
    parsed_object.salary_details.phd =
        backEndFormObject.salary_details_phd;
    parsed_object.selection_process =
        backEndFormObject.selection_process;
};

export { frontToBack, backToFront };
