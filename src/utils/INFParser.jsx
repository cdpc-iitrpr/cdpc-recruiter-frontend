import { blank_inf_object } from "../constants/formObjects";

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
    job_profile_six_months_intern: "",
    job_profile_two_months_intern: "",
    job_profile_joint_master_thesis_program: "",
    stipend_details_stipend_amount: "",
    stipend_details_bonus_perks_incentives: "",
    stipend_details_accodation_trip_fare: "",
    stipend_details_bonus_service_contract: "",
    selection_process: {
        eligibility_criteria: "",
        allow_backlog_students: false,
        test_type: {
            ppt: false,
            shortlist_from_resume: false,
            written_test: false,
            online_test: false,
            technical_test: false,
            aptitude_test: false,
            psychometric_test: false,
            group_discussion: false,
            personal_interview: false,
        },
        test_duration: "",
        likely_topics: "",
        number_of_rounds: 0,
        group_discussion_duration: "",
        number_of_offers: 0,
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
        frontEndFormObject.job_profile.job_title;
    parsed_object.job_profile_job_description =
        frontEndFormObject.job_profile.job_description;
    parsed_object.job_profile_job_description_pdf =
        frontEndFormObject.job_profile.job_description_pdf;
    parsed_object.job_profile_place_of_posting =
        frontEndFormObject.job_profile.place_of_posting;
    parsed_object.job_profile_six_months_intern =
        frontEndFormObject.job_profile.six_month_intern;
    parsed_object.job_profile_two_months_intern =
        frontEndFormObject.job_profile.two_month_intern;
    parsed_object.job_profile_joint_master_thesis_program =
        frontEndFormObject.job_profile.joint_master_thesis_program;

    parsed_object.stipend_details_accodation_trip_fare =
        frontEndFormObject.stipend_details.accomodation_trip_fare;
    parsed_object.stipend_details_bonus_perks_incentives =
        frontEndFormObject.stipend_details.bonus_perks_incentives;
    parsed_object.stipend_details_bonus_service_contract =
        frontEndFormObject.stipend_details.bond_service_contract;
    parsed_object.stipend_details_stipend_amount =
        frontEndFormObject.stipend_details.stipend_amount;
    parsed_object.selection_process = frontEndFormObject.selection_process;
    return parsed_object;
};

const backToFront = (backEndFormObject) => {
    let parsed_object = blank_inf_object;
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

    parsed_object.job_profile.job_title =
        backEndFormObject.job_profile_designation;
    parsed_object.job_profile.job_description =
        backEndFormObject.job_profile_job_description;
    parsed_object.job_profile.job_description_pdf =
        backEndFormObject.job_profile_job_description_pdf;
    parsed_object.job_profile.place_of_posting =
        backEndFormObject.job_profile_place_of_posting;
    parsed_object.job_profile.six_month_intern =
        backEndFormObject.job_profile_six_months_intern;
    parsed_object.job_profile.two_month_intern =
        backEndFormObject.job_profile_two_months_intern;
    parsed_object.job_profile.joint_master_thesis_program =
        backEndFormObject.job_profile_joint_master_thesis_program;

    parsed_object.stipend_details.accomodation_trip_fare =
        backEndFormObject.stipend_details_accodation_trip_fare;
    parsed_object.stipend_details.bonus_perks_incentives =
        backEndFormObject.stipend_details_bonus_perks_incentives;
    parsed_object.stipend_details.bond_service_contract =
        backEndFormObject.stipend_details_bonus_service_contract;
    parsed_object.stipend_details.stipend_amount =
        backEndFormObject.stipend_details_stipend_amount;
    parsed_object.selection_process = backEndFormObject.selection_process;

    return parsed_object;
};

export { frontToBack, backToFront };
