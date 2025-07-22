import java.util.HashMap;

class Node {
    int key, val;
    Node prev, next;

    Node(int key, int val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUImplementation {

    int capacity;
    HashMap<Integer, Node> hm;
    Node front;
    Node rear;

    public LRUImplementation(int capacity) {
        this.hm = new HashMap<>();
        this.capacity = capacity;
        this.front = null;
        this.rear = null;
    }

    // need to update list on get also
    public int get(int key) {
        if (hm.containsKey(key) == false)
            return -1;

        Node old = hm.get(key);
        Node nn = new Node(key, old.val);
        // single node
        if (this.front == this.rear) {
            hm.get(key).val = old.val;
        }
        // front node
        else if (this.front == old) {
            hm.get(key).val = old.val;
        }
        // rear node
        else if (this.rear == old) {
            old.prev.next = null;
            this.rear = old.prev;
            this.front.prev = nn;
            nn.next = front;
            this.front = nn;
            hm.put(key, nn);
        }
        // middle node
        else {
            old.prev.next = old.next;
            old.next.prev = old.prev;
            this.front.prev = nn;
            nn.next = front;
            this.front = nn;
            hm.put(key, nn);
        }
        return hm.get(key).val;
    }

    public void put(int key, int value) {

        
        if (this.capacity == 0)
            return;
        
        if (this.front == null) {
            Node nn = new Node(key, value);
            this.front = nn;
            this.rear = nn;
            hm.put(key, nn);
            return;
        }
        
        // update position
        if (hm.containsKey(key) == true) {
            Node nn = new Node(key, value);
            Node old = hm.get(key);
            // single node
            if (this.front == this.rear) {
                hm.get(key).val = value;
            }
            // front node
            else if (this.front == old) {
                hm.get(key).val = value;
            }
            // rear node
            else if (this.rear == old) {
                old.prev.next = null;
                this.rear = old.prev;
                this.front.prev = nn;
                nn.next = front;
                this.front = nn;
                hm.put(key, nn);
            }
            // middle node
            else {
                old.prev.next = old.next;
                old.next.prev = old.prev;
                this.front.prev = nn;
                nn.next = front;
                this.front = nn;
                hm.put(key, nn);
            }
        }
        // size > capacity
        else if (hm.size() >= this.capacity) {
            // evict
            int evictKey = this.rear.key;
            hm.remove(evictKey);

            Node nn = new Node(key, value);
            hm.put(key, nn);
            
            // single elem
            if (this.front == this.rear) {
                this.front = nn;
                this.rear = nn;
            } else {
                this.rear.prev.next = null;
                this.rear = this.rear.prev;
                nn.next = this.front;
                this.front.prev = nn;
                this.front = nn;
            }
        }
        // size < capacity
        else {
            Node nn = new Node(key, value);
            nn.next = this.front;
            this.front.prev = nn;
            this.front = nn;
            hm.put(key, nn);
        }
    }
}   

public class LRU_Cache {
    public static void main(String[] args) {
        LRUImplementation obj = new LRUImplementation(2);

        obj.put(1, 1);
        obj.put(2, 2);        
        System.out.println(obj.get(1));
        obj.put(3, 3);
        System.out.println(obj.get(2));
        obj.put(4, 4);
        System.out.println(obj.get(1));
        System.out.println(obj.get(3));
        System.out.println(obj.get(4));

    }
}