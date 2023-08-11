const empty_organisation_details = {
    about_organisation: {
        organisation: "",
        postal_address: "",
        website: "",
    },
    organisation_type: {
        options: [],
        others: "",
    },
    industry_sector: {
        options: [],
        others: "",
    },
    contact_details: {
        head_hr: {
            name: "",
            email: "",
            mobile: "",
            phone: "",
        },
        first_person_of_contact: {
            name: "",
            email: "",
            mobile: "",
            phone: "",
        },
        second_person_of_contact: {
            name: "",
            email: "",
            mobile: "",
            phone: "",
        },
    },
};

const empty_inf_job_details = {
    job_profile: {
        job_title: "",
        two_month_intern: false,
        six_month_intern: false,
        joint_master_thesis_program: false,
        place_of_posting: "",
        job_description: "",
        job_destription_pdf: [File],
    },
    stipend_details: {
        stipend_amount: "",
        bonus_perks_incentives: "",
        accomodation_trip_fare: "",
        bond_service_contract: "",
    },
};

export { empty_inf_job_details, empty_organisation_details };
