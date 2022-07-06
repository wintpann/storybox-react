import { useState } from 'react';
export var useNode = function () {
    var _a = useState(null), node = _a[0], setNode = _a[1];
    return [
        node,
        function (updated) {
            if (node !== updated && updated !== null)
                setNode(updated);
        },
    ];
};
