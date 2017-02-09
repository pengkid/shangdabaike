
window.onload = function () {
    var container_head_left = document.getElementById('container_head_left'),
        container_head_right = document.getElementById('container_head_right'),
        container_body_1 = document.getElementById('container_body_1'),
        container_body_2 = document.getElementById('container_body_2');

    container_head_left.onclick = function () {
        container_body_1.style.display = 'block';
        container_body_2.style.display = 'none';
        container_head_left.className = 'container_head_item';
        container_head_right.className = 'container_head_item active';
    };
    container_head_right.onclick = function () {
        container_body_1.style.display = 'none';
        container_body_2.style.display = 'block';
        container_head_left.className = 'container_head_item active';
        container_head_right.className = 'container_head_item';
    }
};
