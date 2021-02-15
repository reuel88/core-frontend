import React from 'react';

class MicroFrontend extends React.Component {
    componentDidMount() {
        const {name, host, document} = this.props;
        const scriptId = `micro-frontend-script-${name}`;

        if (document.getElementById(scriptId)) {
            this.renderMicroFrontend();
            return;
        }

        fetch(`${host}/asset-manifest.json`)
            .then(res => res.json())
            .then(manifest => {
                const script = document.createElement('script');
                script.id = scriptId;
                script.crossOrigin = '';
                script.src = `${host}${manifest.files['main.js']}`;
                script.onload = this.renderMicroFrontend;
                document.head.appendChild(script);
            });
    }

    componentWillUnmount() {
        const {name, window} = this.props;

        if(typeof window[`unmount${name}`] !== 'function') return alert(`unmount${name} not found`);

        window[`unmount${name}`](`${name}-container`);
    }

    renderMicroFrontend = () => {
        const {name, window, ...rest} = this.props;

        if(typeof window[`render${name}`] !== 'function') return alert(`render${name} not found`);

        window[`render${name}`](`${name}-container`, rest);
    };

    render() {
        const {name} = this.props;

        return <main id={`${name}-container`}/>;
    }
}

MicroFrontend.defaultProps = {
    document,
    window,
};

export default MicroFrontend;