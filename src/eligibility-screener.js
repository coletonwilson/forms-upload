export function screener(respondentDetails) {

    let result = {};

    if (respondentDetails.hhi <= 25000) {
        result.coverage_percent = 90
        if (respondentDetails.dependent_age < 5)
            result.form = 'B202';

        else 
            result.form = 'D303';

        if(respondentDetails.single_parent == true)
            result.coverage_percent+= 10
        
        return result
    }


    if (respondentDetails.hhi > 45000) {
        result.coverage_percent = 0
        if (respondentDetails.dependent_age < 5) {
            result.form = 'B202'
        } else {
            result.form = 'D303'
        }
        return result
    }

    if (respondentDetails.single_parent === true) {
        result.coverage_percent = 10
        result.form = 'B202'
        if (respondentDetails.hhi < 25000) {
            result.coverage_percent += 90
        }
        else {
            result.coverage_percent += 50
        }
        return result
    }

    result.coverage_percent = 50
    if (respondentDetails.dependent_age < 5) {
        result.form = 'B202'
    }
    else {
        result.form = 'D303'
    }
    return result

}