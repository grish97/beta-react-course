

export const JobExperience = ({ jobExperience, onInputChange }) => {
    return (
        <>
        {/** Experience */}
        <div className="form-field">
            <label htmlFor="experience">Experience </label>
            <input
                name='experience'
                type="number"
                value={jobExperience.experience}
                onChange={(e) => onInputChange('experience', e.target.value)}
            />
        </div>

        {/** Primary Focus */}
        <div className="form-field">
            <label htmlFor="primaryFocus">Primary Focus </label>
            <select name="primaryFocus" id="primaryFocus" value={jobExperience.primaryFocus} onChange={() => {}}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="both">Both</option>
            </select>
        </div>

        {/** Certificate */}
        <div className="form-field">
            <label htmlFor="certificate">Certificate </label>
            <input
                name='certificate'
                type="text"
                value={jobExperience.certificate}
                onChange={(e) => onInputChange('certificate', e.target.value)}
            />
        </div>
    </>
    );
};