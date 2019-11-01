function buildNodeHtml(nodeName) {
  const isRoot = arguments[1];
  const nodeImg = arguments[2];
  const nodeClass = isRoot ? 'is-root' : 'node-element';

  const imgSrc = nodeImg
    ? `../assets/${nodeImg}`
    : `../assets/${nodeName}_logo.png`;

  const nodeHtml = `
    <div class="${nodeClass}">
      <div class="inner">
        <div class="node-logo">
          <img src="${imgSrc}" />
        </div>
      </div>
    </div>
  `;
  return nodeHtml;
}

// Tree configuration
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
    HTMLid: 'root',
    innerHTML: buildNodeHtml('root', true, 'heart_logo.jpg'),
    content: {
      title: 'Bem vindo(a) a He4rt Devs Roadmap!',
      subtitle: 'A estrada de aprendizado da programação',
      description:
        'Nessa árvore você tem um roadmap com todas as coisas legais que um programador front end deve saber. Cadastre-se na comunidade da he4rt para saber mais',
      links: [
        {
          description: 'Link da comunidade:',
          href: 'https://www.google.com'
        }
      ]
    }
  },
  {
    nodeName: 'html',
    HTMLid: 'html',
    parent: 'root',
    innerHTML: buildNodeHtml('html')
  },
  {
    nodeName: 'css',
    HTMLid: 'css',
    parent: 'root',
    innerHTML: buildNodeHtml('css'),
    content: {
      title: 'CSS',
      subtitle: 'Cascading style sheets',
      description: 'Descrição bem legal. Essa é pra ficar bonitinho',
      completed: true,
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
    }
  },
  {
    nodeName: 'css-c',
    HTMLid: 'css-c',
    parent: 'css',
    // image: '../assets/css_logo.png',
    innerHTML: buildNodeHtml('css')
  },
  {
    nodeName: 'js',
    HTMLid: 'js',
    parent: 'root',
    innerHTML: buildNodeHtml('js')
  },
  {
    nodeName: 'js-arrays',
    HTMLid: 'js-arrays',
    parent: 'js',
    innerHTML: buildNodeHtml('js'),
    content: {
      title: 'Javaescrito',
      subtitle: 'Uma linguagem muito boa mesmo',
      description:
        '<p>Linguagem bem legal criada em algum dia</p> <p>e usada pra várias coisas. Acessar links abaixo pra saber mais:Linguagem bem legal criada em algum dia</p> e usada pra várias coisas. Acessar links abaixo pra saber mais:Linguagem bem legal criada em algum dia e usada pra várias coisas. Acessar links abaixo pra saber mais:Linguagem bem legal criada em algum dia e usada pra várias coisas. Acessar links abaixo pra saber mais:Linguagem bem legal criada em algum dia e usada pra várias coisas. Acessar links abaixo pra saber mais:Linguagem bem legal criada em algum dia e usada pra várias coisas. Acessar links abaixo pra saber mais:Linguagem bem legal criada em algum dia e usada pra várias coisas. Acessar links abaixo pra saber mais:Linguagem bem legal criada em algum dia e usada pra várias coisas. Acessar links abaixo pra saber mais:Linguagem bem legal criada em algum dia e usada pra várias coisas. Acessar links abaixo pra saber mais:Linguagem bem legal criada em algum dia e usada pra várias coisas. Acessar links abaixo pra saber mais:Linguagem bem legal criada em algum dia e usada pra várias coisas. Acessar links abaixo pra saber mais:Linguagem bem legal criada em algum dia e usada pra várias coisas. Acessar links abaixo pra saber mais:Linguagem bem legal criada em algum dia e usada pra várias coisas. Acessar links abaixo pra saber mais:Linguagem bem legal criada em algum dia e usada pra várias coisas. Acessar links abaixo pra saber mais:Linguagem bem legal criada em algum dia e usada pra várias coisas. Acessar links abaixo pra saber mais:Linguagem bem legal criada em algum dia e usada pra várias coisas. Acessar links abaixo pra saber mais:Linguagem bem legal criada em algum dia e usada pra várias coisas. Acessar links abaixo pra saber mais:Linguagem bem legal criada em algum dia e usada pra várias coisas. Acessar links abaixo pra saber mais:Linguagem bem legal criada em algum dia e usada pra várias coisas. Acessar links abaixo pra saber mais:Linguagem bem legal criada em algum dia e usada pra várias coisas. Acessar links abaixo pra saber mais:Linguagem bem legal criada em algum dia e usada pra várias coisas. Acessar links abaixo pra saber mais:Linguagem bem legal criada em algum dia e usada pra várias coisas. Acessar links abaixo pra saber mais:Linguagem bem legal criada em algum dia e usada pra várias coisas. Acessar links abaixo pra saber mais:Linguagem bem legal criada em algum dia e usada pra várias coisas. Acessar links abaixo pra saber mais:',
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
    }
  },
  {
    nodeName: 'js-arrays2',
    HTMLid: 'js-arrays2',
    parent: 'js',
    innerHTML: buildNodeHtml('js')
  },
  {
    nodeName: 'arraysa',
    HTMLid: 'arraysa',
    parent: 'arrays',
    innerHTML: buildNodeHtml('js')
  },
  {
    nodeName: 'functionss',
    HTMLid: 'functionss',
    parent: 'js',
    innerHTML: buildNodeHtml('js')
  }
];

// Build tree
const chart_config = [config];
nodeArray.forEach(node => {
  this[node.nodeName] = node;
  if (node.parent) {
    this[node.nodeName].parentName = node.parent;
    node.parent = this[node.parent];
  }
  chart_config.push(node);
});

// Initializes tree with node configuration
const roadmapTree = new Treant(chart_config);

// Functions that executes on node select
const nodeElements = document.querySelectorAll('.tree-node');
nodeElements.forEach(node => {
  node.onclick = () => {
    showDetail(node.id);
    nodeElements.forEach(function removeSelectedClass(elem) {
      elem.classList.remove('selected');
    });
    initToggleState(node);
    node.classList.add('selected');
    getPathToNode(node);
  };
});

// builds the detail html element,
// showing a default message if doesnt have content
const showDetail = nodeId => {
  const content = this[nodeId].content;
  this.selectedNode = this[nodeId];
  const detailEl = document.getElementById('node-detail');

  if (!content) {
    detailEl.innerHTML = `
    <div class="detail">
      <div class="description">Esta seção ainda não tem nenhum conteúdo. Entre na comunidade da heart para adicionar</h4>      
    </div>
    `;
    return;
  }
  document.getElementById('node-detail').innerHTML = `
    <div class="detail">
      <div class="title">${content.title}</div>
      <div class="subtitle">${content.subtitle}</div>
      <div class="description">${content.description}</div>    
      ${buildLinkList(content.links)}  
    </div>
  `;
};

// Builds the link list html element
const buildLinkList = linksList => {
  let linksListElement = '<ul class="todo-list">';
  linksList.forEach(link => {
    linksListElement += `
      <li class="link-item">
        <span class="desc">${link.description}</span>
        <a class="link" href="${link.href}" target="_blank">${link.href}</a>       
      </li>
    `;
  });
  linksListElement += '</ul>';
  return linksListElement;
};

var pathToNode = [];
// Gets an array with all the nodes above the selected
// until reaches the root
const getPathToNode = node => {
  pathToNode = [];
  getNodeParents(node);
};

const getNodeParents = node => {
  if (!node || node.nodeName === 'root') {
    return;
  }
  const parentName = this[node.id] ? this[node.id].parentName : 'root';
  if (pathToNode.length > 10) {
    return;
  }
  node = node['nodeName'] ? node : this[node.id];
  pathToNode.push(node);
  if (node.nodeName !== 'root') {
    getNodeParents(this[parentName]);
  }
  return;
};

const setCssVariable = (property, value) => {
  document.body.style.setProperty(property, value);
};

// Chart Zoom on slider input
setCssVariable('--tree-scale', 1);
document.getElementById('tree-scale').oninput = event => {
  scale = event.target.value / 10;
  setCssVariable('--tree-scale', scale);
};

// Chart Pan
const setOffsetMargin = () => {
  const mTop = chart.style.getPropertyValue('margin-top');
  const mLeft = chart.style.getPropertyValue('margin-left');
  offsetY = mTop.length > 2 ? +mTop.slice(0, mTop.length - 2) : 0;
  offsetX = mLeft.length > 2 ? +mLeft.slice(0, mLeft.length - 2) : 0;
};

const treeContainer = document.querySelector('.tree-container');
const chart = document.querySelector('#heart-tree');
const chartHammer = new Hammer(treeContainer, {});
setOffsetMargin();

let cancelPan = false;
chartHammer.on('panstart', ev => {
  if (ev.target instanceof HTMLImageElement) {
    cancelPan = true;
    return;
  }
  cancelPan = false;
  setOffsetMargin();
});

chartHammer.on('pan', ev => {
  if (ev.target instanceof HTMLImageElement) {
    cancelPan = true;
    return;
  }
  chart.style.setProperty('margin-left', `${offsetX + ev.deltaX}px`);
  chart.style.setProperty('margin-top', `${offsetY + ev.deltaY}px`);
});

// Resizeable functions
const resizeable = document.getElementById('resizeable');
const resizeableHammer = new Hammer(resizeable, {});

leftCol = resizeable.previousElementSibling;
rightCol = resizeable.nextElementSibling;

let leftColWidth;
let rightColWidth;

resizeableHammer.on('panstart', ev => {
  leftColWidth = leftCol.clientWidth;
  rightColWidth = rightCol.clientWidth;
});

resizeableHammer.on('pan', ev => {
  leftCol.style.width = `${leftColWidth + ev.deltaX}px`;
  rightCol.style.width = `${rightColWidth - ev.deltaX}px`;
});

window.onresize = () => {
  leftCol.style.width = `calc(50% - 10px)`;
  rightCol.style.width = `calc(50% - 10px)`;
};

// Functions to complete node
const initToggleState = node => {
  const nodeContent = this[node.id].content;
  const completed = nodeContent ? nodeContent.completed : false;
  document.getElementById('toggle-complete').checked = completed;
};

const toggleCompleteNode = (node, checked) => {
  selectedNode = node ? node : this.selectedNode;
  if (selectedNode.nodeName === 'root') {
    return;
  }
  if (selectedNode.content) {
    selectedNode.content.completed = checked;
  }
  let nodeElem = document.getElementById(selectedNode.nodeName);
  if (!nodeElem) {
    return;
  }
  nodeElem = nodeElem.querySelector('.node-element');
  if (checked) {
    nodeElem.classList.add('completed');
    return;
  }
  nodeElem.classList.remove('completed');
};

nodeArray.forEach(node => {
  toggleCompleteNode(node, node.content ? node.content.completed : false);
});

document.getElementById('root').click();

// Function to draw arcs
// var archtype = window.RaphaelCanvas;
// archtype.customAttributes.arc = function(xloc, yloc, value, total, R) {
//   var alpha = (360 / total) * value,
//     a = ((90 - alpha) * Math.PI) / 180,
//     x = xloc + R * Math.cos(a),
//     y = yloc - R * Math.sin(a),
//     path;
//   if (total == value) {
//     path = [['M', xloc, yloc - R], ['A', R, R, 0, 1, 1, xloc - 0.01, yloc - R]];
//   } else {
//     path = [['M', xloc, yloc - R], ['A', R, R, 0, +(alpha > 180), 1, x, y]];
//   }
//   return {
//     path: path
//   };
// };

// var my_arc = archtype.path().attr({
//   stroke: '#f00',
//   'stroke-width': 14,
//   arc: [50, 50, 0, 100, 30]
// });
// my_arc.animate(
//   {
//     arc: [50, 50, 40, 100, 30]
//   },
//   1500,
//   'bounce'
// );
