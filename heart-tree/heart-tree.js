var config = {
  container: '#heart-tree',

  connectors: {
    type: 'curve',
    style: {
      stroke: '#888',
      'stroke-width': 4
    }
  },
  node: {
    HTMLclass: 'tree-node',
    collapsable: true
  },
  animation: {
    nodeSpeed: 400,
    connectorsSpeed: 200
  }
};
const nodeArray = [
  {
    nodeName: 'root',
    pseudo: true
  },
  {
    nodeName: 'html',
    HTMLid: 'html',
    parent: 'root',
    image: '../assets/html_logo.png',
    innerHTML: `<div class="node-element">
        <div class="inner-hexagon">
          <div class="node-logo">
            <img src="../assets/html_logo.png"/>
          </div>
        </div>
      </div>`
    // text: {
    //   name: 'HTML',
    //   description: 'Chief executive officer',
    //   link: 'https://www.google.com'
    // }
  },
  {
    nodeName: 'css',
    HTMLid: 'css',
    parent: 'root',
    // image: '../assets/css_logo.png',
    innerHTML: `<div class="node-element">
        <div class="inner-hexagon">
          <div class="node-logo">
            <img src="../assets/css_logo.png"/>
          </div>
        </div>
      </div>`,
    text: {
      name: 'CSS',
      description: 'Chief executive officer',
      link: 'https://www.google.com'
    },
    content: {
      title: 'CSS',
      subtitle: 'Cascading style sheets',
      description: 'Descrição bem legal. Essa é pra ficar bonitinho',
      links: [
        {
          description: 'Link bem legal',
          href: 'https://www.google.com'
        },
        {
          description: 'Link bem legal',
          href: 'https://www.google.com'
        }
      ]
    },
    stackChildren: false
  },
  {
    nodeName: 'css-c',
    HTMLid: 'css-c',
    parent: 'css',
    // image: '../assets/css_logo.png',
    innerHTML: `<div class="node-element">
        <div class="inner-hexagon">
          <div class="node-logo">
            <img src="../assets/css_logo.png"/>
          </div>
        </div>
      </div>`,
    text: {
      name: 'CSS',
      description: 'Chief executive officer',
      link: 'https://www.google.com'
    },
    stackChildren: false
  },
  {
    nodeName: 'js',
    HTMLid: 'js',
    parent: 'root',
    image: '../assets/js_logo.png',
    innerHTML: `<div class="node-element">
        <div class="inner-hexagon">
          <div class="node-logo">
            <img src="../assets/js_logo.png"/>
          </div>
        </div>
      </div>`,
    text: {
      name: 'JavaScript',
      description: 'Chief executive officer',
      link: 'https://www.google.com'
    }
  },
  {
    nodeName: 'js-arrays',
    HTMLid: 'js-arrays',
    parent: 'js',
    image: '../assets/js_logo.png',
    innerHTML: `<div class="node-element">
        <div class="inner-hexagon">
          <div class="node-logo">
            <img src="../assets/js_logo.png"/>
          </div>
        </div>
      </div>`,
    text: {
      name: 'JavaScript',
      description: 'Chief executive officer',
      link: 'https://www.google.com'
    },
    content: {
      title: 'Javaescrito',
      subtitle: 'Uma linguagem muito boa mesmo',
      description:
        'Linguagem bem legal criada em algum dia e usada pra várias coisas. Acessar links abaixo pra saber mais:',
      links: [
        {
          description: 'Link bem legal',
          href: 'https://www.google.com'
        },
        {
          description: 'Link bem legal',
          href: 'https://www.google.com'
        },
        {
          description: 'Link bem legal',
          href: 'https://www.google.com'
        },
        {
          description: 'Link bem legal',
          href: 'https://www.google.com'
        }
      ]
    },
    connectors: {
      type: 'curve',
      style: {
        stroke: 'red',
        'stroke-width': 4
      }
    }
  },
  {
    nodeName: 'js-arrays2',
    HTMLid: 'js-arrays2',
    parent: 'js',
    image: '../assets/js_logo.png',
    innerHTML: `<div class="node-element">
        <div class="inner-hexagon">
          <div class="node-logo">
            <img src="../assets/css_logo.png"/>            
          </div>          
        </div>
      </div>`,
    text: {
      name: 'JavaScript',
      description: 'Chief executive officer',
      link: 'https://www.google.com'
    },
    connectors: {
      type: 'curve',
      style: {
        stroke: 'red',
        'stroke-width': 4
      }
    }
  },
  {
    nodeName: 'arraysa',
    HTMLid: 'jsaa-arrays',
    parent: 'arrays',
    image: '../assets/js_logo.png',
    innerHTML: `<div class="node-element">
        <div class="inner-hexagon">
          <div class="node-logo">
            <img src="../assets/js_logo.png"/>
          </div>
        </div>
      </div>`,
    text: {
      name: 'JavaScript',
      description: 'Chief executive officer',
      link: 'https://www.google.com'
    },
    connectors: {
      type: 'curve',
      style: {
        stroke: 'red',
        'stroke-width': 4
      }
    }
  },
  {
    nodeName: 'functionss',
    HTMLid: 'js-functionss',
    parent: 'js',
    image: '../assets/js_logo.png',
    innerHTML: `<div class="node-element">
        <div class="inner-hexagon">
          <div class="node-logo">
            <img src="../assets/js_logo.png"/>
          </div>
          <div>
        </div>
      </div>`,
    text: {
      name: 'JavaScript',
      description: 'Chief executive officer',
      link: 'https://www.google.com'
    }
  }
];

const chart_config = [config];
nodeArray.forEach(node => {
  this[node.nodeName] = node;
  if (node.parent) {
    node.parent = this[node.parent];
  }
  chart_config.push(this[node.nodeName]);
});

const roadmapTree = new Treant(chart_config);
console.log(roadmapTree);

const nodeElements = document.querySelectorAll('.tree-node');
nodeElements.forEach(node => {
  node.onclick = () => {
    showDetail(node.id);
    nodeElements.forEach(function removeSelectedClass(elem) {
      elem.classList.remove('selected');
    });
    node.classList.add('selected');
  };
});

const showDetail = nodeId => {
  const content = this[nodeId].content;
  const detailEl = document.getElementById('node-detail');

  if (!content) {
    detailEl.innerHTML = `
    <div class="detail">
      <h4 class="title">Esta seção ainda nnao tem nenhum conteúdo. Entre na comunidade da heart para adicionar</h4>      
    </div>
    `;
    return;
  }
  document.getElementById('node-detail').innerHTML = `
    <div class="detail">
      <h2 class="title">${content.title}</h2>
      <h4 class="subtitle">${content.subtitle}</h4>
      <p class="description">${content.description}</p>    
      ${buildLinkList(content.links)}  
    </div>
  `;
};
const buildLinkList = linksList => {
  let linksListElement = '<ul class="links">';
  linksList.forEach(link => {
    linksListElement += `
      <li class="link-item">
        <div>
          <span class="desc">${link.description}</span>
          <a class="link" href="${link.href}" target="_blank">${link.href}</a>
        </div>
      </li>
    `;
  });
  linksListElement += '</ul>';
  return linksListElement;
};
