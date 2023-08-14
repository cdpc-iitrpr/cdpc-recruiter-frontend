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

const empty_selection_process = {
    eligibility_criteria: 0,
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
    number_of_offers: 0,
    preferred_period: "",
    logistics_requirements: "",
    interested_discipline: [
        {
            degree: "",
            branches: [],
        },
    ],
};

const blank_inf_object = {
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
    job_profile: {
        job_title: "",
        two_month_intern: false,
        six_month_intern: false,
        joint_master_thesis_program: false,
        place_of_posting: "",
        job_description: "",
        job_destription_pdf: [],
    },
    stipend_details: {
        stipend_amount: "",
        bonus_perks_incentives: "",
        accomodation_trip_fare: "",
        bond_service_contract: "",
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

const blank_jaf_object = {
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
    job_profile: {
        designation: "",
        job_description: "",
        job_description_pdf: [],
        place_of_posting: "",
    },
    salary_details: {
        b_tech: {
            ctc_gross: "",
            ctc_take_home: "",
            ctc_bonus_perks: "",
            bond_contract: "",
        },
        m_tech: {
            ctc_gross: "",
            ctc_take_home: "",
            ctc_bonus_perks: "",
            bond_contract: "",
        },
        m_sc: {
            ctc_gross: "",
            ctc_take_home: "",
            ctc_bonus_perks: "",
            bond_contract: "",
        },
        phd: {
            ctc_gross: "",
            ctc_take_home: "",
            ctc_bonus_perks: "",
            bond_contract: "",
        },
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

export {
    empty_inf_job_details,
    empty_organisation_details,
    empty_selection_process,
    blank_inf_object,
    blank_jaf_object,
};
