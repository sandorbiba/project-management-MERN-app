import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const projectSchema = Yup.object().shape({
  projectName: Yup.string().required("Required"),
  step2: Yup.string().required("Required"),
  step3: Yup.string().required("Required"),
  step4: Yup.string().required("Required"),
  step5: Yup.string().required("Required"),
  step6: Yup.string().required("Required"),
  step7: Yup.string().required("Required"),
  step8: Yup.string().required("Required"),
  est: Yup.number().required("Required"),
});

const ProjectForm = ({ currentProject, handleSubmit, _id, history }) => (
  <div>
    <Formik
      initialValues={currentProject}
      validationSchema={projectSchema}
      onSubmit={(values) => {
        values.est = parseInt(values.est, 10);
        const project = _id ? { ...values, _id } : values;
        handleSubmit({ project, history });
      }}
    >
      {({ errors, touched, values }) => (
        <Form>
          <div>
            <label htmlFor="projectName">projectName</label>
            <Field
              name="projectName"
              placeholder="placeholder"
              label="ProjectName"
            />
            {errors.projectName && touched.projectName ? (
              <div>{errors.projectName}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor="step2">step2</label>
            <Field as="textarea" name="step2" placeholder="placeholder" />
            {errors.step2 && touched.step2 ? <div>{errors.step2}</div> : null}
          </div>

          <div>
            <label htmlFor="step3">step3</label>
            <Field as="textarea" name="step3" placeholder="placeholder" />
            {errors.step3 && touched.step3 ? <div>{errors.step3}</div> : null}
          </div>

          <div>
            <label htmlFor="step4">step4</label>
            <Field as="textarea" name="step4" placeholder="placeholder" />
            {errors.step4 && touched.step4 ? <div>{errors.step4}</div> : null}
          </div>

          <div>
            <label htmlFor="step5">step5</label>
            <Field as="textarea" name="step5" placeholder="placeholder" />
            {errors.step5 && touched.step5 ? <div>{errors.step5}</div> : null}
          </div>

          <div>
            <label htmlFor="step6">step6</label>
            <Field as="textarea" name="step6" placeholder="placeholder" />
            {errors.step6 && touched.step6 ? <div>{errors.step6}</div> : null}
          </div>

          <div>
            <label htmlFor="step7">step7</label>
            <Field as="textarea" name="step7" placeholder="placeholder" />
            {errors.step7 && touched.step7 ? <div>{errors.step7}</div> : null}
          </div>

          <div>
            <label htmlFor="step8">step8</label>
            <Field as="textarea" name="step8" placeholder="placeholder" />
            {errors.step8 && touched.step8 ? <div>{errors.step8}</div> : null}
          </div>

          <div>
            <label htmlFor="est">est</label>
            <Field as="select" name="est">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="8">8</option>
              <option value="13">13</option>
              <option value="21">21</option>
              <option value="34">34</option>
            </Field>
            {errors.est && touched.est ? <div>{errors.est}</div> : null}
          </div>

          <button
            type="submit"
            disabled={
              values.projectName === "" ||
              values.step2 === "" ||
              values.step3 === "" ||
              values.step4 === "" ||
              values.step5 === "" ||
              values.step6 === "" ||
              values.step7 === "" ||
              values.step8 === "" ||
              values.est === ""
                ? "disabled"
                : ""
            }
          >
            Save
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

ProjectForm.defaultProps = {
  _id: "",
  currentProject: {
    projectName: "",
    step2: "",
    step3: "",
    step4: "",
    step5: "",
    step6: "",
    step7: "",
    step8: "",
    est: 1,
  },
};

export default ProjectForm;
