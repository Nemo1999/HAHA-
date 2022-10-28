function t_font_family(scene_name='font_family') {
    const test_cases = [
        {
            'content': 'HAHA-GCAT 綠毛蟲要過河',
            'style': {
                'font-family': 'Serif',
                'font-size': 16,
            }
        },
        {
            'content': 'HAHA-GCAT 綠毛蟲要過河',
            'style': {
                'font-family': 'Courier New',
                'font-size': 16,
            }
        }
    ];

    // scene
    const scene = new Scene(scene_name);
    
    scene.reloadSelf = function() {
        this.activate()
        this.show()
    };

    // background
    // const bg = new Node('background', false);
    // bg.drawSelf = function() {
    //     background(200);
    // };

    test_cases.forEach((p, i) => {
        let text_node = new TextNode(p['content'], true, p['style'])
        text_node.setTranslate(100, 100*(i+1))
        scene.addChild(text_node)
    });

    return scene
}

function t_text_scaling(scene_name='text_scaling') {
    const test_cases = [
        {
            'content': 'HAHA-GCAT 綠毛蟲要過河',
            'style': {
                'font-family': 'openhuninn',
                'font-size': 16,
            },
            'scale': 1
        },
        {
            'content': 'HAHA-GCAT 綠毛蟲要過河',
            'style': {
                'font-family': 'openhuninn',
                'font-size': 16,
            },
            'scale': 2
        }
    ];

    // scene
    const scene = new Scene(scene_name);
    
    scene.reloadSelf = function() {
        this.activate()
        this.show()
    };

    test_cases.forEach((p, i) => {
        let text_node = new TextNode(p['content'], true, p['font'], p['font-size'], p['line-height'])
        text_node.setTranslate(100, 100*(i+1))
        text_node.setScale(p['scale'])
        scene.addChild(text_node)
    });

    return scene
}