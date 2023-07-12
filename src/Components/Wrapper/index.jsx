import { connect } from "react-redux";

import { router } from "../Router";

const wrapper = (Component, { mapState, mapDispatch, namespace, route }) => {
  let component = Component;

  if (mapState || mapDispatch) {
    component = connect(mapState, mapDispatch)(component);
  }

  if (route) {
    component = router(component, route);
  }

  return component;
};

export default wrapper;
