const c = (classList = []) => {
  const classes = classList.reduce((prev, claz = [], index) => {
    const type = Array.isArray(claz) ? 'array' : typeof claz;

    switch (type) {
      case 'array':
        const [name, status] = claz;
        if (status) prev.push(name);
        break;
      case 'string':
        prev.push(claz);
        break;
      default:
    }
    return prev;
  }, []);
  return classes.join(' ');
};

export default c;
